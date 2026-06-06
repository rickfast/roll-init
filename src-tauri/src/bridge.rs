//! Local WebSocket bridge that streams the current combat state out of
//! Roll Initiative so an Owlbear Rodeo extension (running in a browser on the
//! same machine) can mirror it onto a shared player display.
//!
//! Design: the React frontend calls the `push_combat_state` Tauri command on
//! every change. That payload is stashed as the "latest" snapshot and fanned
//! out over a broadcast channel to every connected WebSocket client. New
//! clients immediately receive the latest snapshot on connect so a display can
//! reconnect at any time and be up to date.

use std::sync::{Arc, Mutex};

use futures_util::{SinkExt, StreamExt};
use tokio::net::{TcpListener, TcpStream};
use tokio::sync::broadcast;
use tokio_tungstenite::tungstenite::Message;

pub struct Bridge {
    tx: broadcast::Sender<String>,
    latest: Mutex<Option<String>>,
}

impl Bridge {
    pub fn new() -> Self {
        // Capacity is a backlog bound, not a client limit — slow clients that
        // lag past this just skip to the newest frame (see RecvError::Lagged).
        let (tx, _rx) = broadcast::channel(16);
        Bridge {
            tx,
            latest: Mutex::new(None),
        }
    }

    /// Store the newest combat state and push it to all connected clients.
    pub fn push(&self, json: String) {
        *self.latest.lock().unwrap() = Some(json.clone());
        // Err just means there are no subscribers right now — fine.
        let _ = self.tx.send(json);
    }

    fn snapshot(&self) -> Option<String> {
        self.latest.lock().unwrap().clone()
    }
}

/// Bind the WebSocket server on loopback and accept connections forever.
/// Loopback-only (127.0.0.1) keeps the data on this machine and avoids macOS
/// firewall prompts.
pub async fn serve(bridge: Arc<Bridge>, port: u16) {
    let addr = format!("127.0.0.1:{port}");
    let listener = match TcpListener::bind(&addr).await {
        Ok(listener) => listener,
        Err(err) => {
            eprintln!("[owlbear-bridge] failed to bind {addr}: {err}");
            return;
        }
    };
    println!("[owlbear-bridge] listening on ws://{addr}");

    while let Ok((stream, _peer)) = listener.accept().await {
        let bridge = bridge.clone();
        tokio::spawn(async move {
            if let Err(err) = handle_conn(stream, bridge).await {
                eprintln!("[owlbear-bridge] connection closed: {err}");
            }
        });
    }
}

async fn handle_conn(
    stream: TcpStream,
    bridge: Arc<Bridge>,
) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    let ws = tokio_tungstenite::accept_async(stream).await?;
    let (mut write, mut read) = ws.split();
    let mut rx = bridge.tx.subscribe();

    // Send the current state right away so a freshly-connected display is in sync.
    if let Some(snapshot) = bridge.snapshot() {
        write.send(Message::text(snapshot)).await?;
    }

    loop {
        tokio::select! {
            // Outgoing: a new combat state was pushed.
            msg = rx.recv() => match msg {
                Ok(json) => write.send(Message::text(json)).await?,
                // Slow consumer fell behind; resync from the newest snapshot.
                Err(broadcast::error::RecvError::Lagged(_)) => {
                    if let Some(snapshot) = bridge.snapshot() {
                        write.send(Message::text(snapshot)).await?;
                    }
                }
                Err(broadcast::error::RecvError::Closed) => break,
            },
            // Incoming: we don't expect data, just watch for disconnect.
            incoming = read.next() => match incoming {
                Some(Ok(Message::Close(_))) | None => break,
                Some(Ok(_)) => {} // ignore pings/other client messages
                Some(Err(err)) => return Err(err.into()),
            },
        }
    }

    Ok(())
}
