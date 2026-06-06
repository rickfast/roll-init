// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod bridge;

use std::sync::Arc;

use bridge::Bridge;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

/// Receive the latest combat state from the frontend and broadcast it to any
/// connected Owlbear display clients.
#[tauri::command]
fn push_combat_state(bridge: tauri::State<Arc<Bridge>>, json: String) {
    bridge.push(json);
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let bridge = Arc::new(Bridge::new());
    let bridge_for_server = bridge.clone();

    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .manage(bridge)
        .setup(move |_app| {
            // Start the local WebSocket bridge on Tauri's tokio runtime.
            tauri::async_runtime::spawn(bridge::serve(bridge_for_server, 8787));
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet, push_combat_state])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
