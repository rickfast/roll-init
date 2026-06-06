import OBR from "@owlbear-rodeo/sdk";
import { useEffect, useState } from "react";
import { getPluginId } from "./getPluginId";
import { isSyncState, SyncState } from "./types";

const WS_URL = "ws://localhost:8787";

export type BridgeStatus = "connecting" | "connected" | "disconnected";

/**
 * GM-only: connect to the Roll Initiative app's local WebSocket bridge and
 * relay each combat-state frame into Owlbear room metadata, which Owlbear then
 * syncs to every other window in the room (the player display reads it).
 *
 * Only the GM should run this: it's the window on the laptop running Roll
 * Initiative, and it's the single writer of room metadata (no write conflicts).
 */
export function useBridge(enabled: boolean): BridgeStatus {
  const [status, setStatus] = useState<BridgeStatus>("disconnected");

  useEffect(() => {
    if (!enabled) {
      setStatus("disconnected");
      return;
    }

    let ws: WebSocket | null = null;
    let closedByUs = false;
    let retry = 0;
    let reconnectTimer: ReturnType<typeof setTimeout> | undefined;
    let lastVersion = -1;

    const connect = () => {
      if (closedByUs) return;
      setStatus("connecting");
      ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        retry = 0;
        setStatus("connected");
      };

      ws.onmessage = (event) => {
        let parsed: unknown;
        try {
          parsed = JSON.parse(event.data as string);
        } catch {
          return;
        }
        if (!isSyncState(parsed)) return;
        const state = parsed as SyncState;
        // Drop stale / out-of-order frames.
        if (state.version <= lastVersion) return;
        lastVersion = state.version;
        OBR.room.setMetadata({ [getPluginId("state")]: state });
      };

      ws.onclose = () => {
        if (closedByUs) return;
        setStatus("disconnected");
        // Exponential backoff: 0.5s, 1s, 2s … capped at 16s.
        retry = Math.min(retry + 1, 6);
        const delay = 500 * 2 ** (retry - 1);
        reconnectTimer = setTimeout(connect, delay);
      };

      ws.onerror = () => {
        ws?.close();
      };
    };

    connect();

    return () => {
      closedByUs = true;
      if (reconnectTimer) clearTimeout(reconnectTimer);
      ws?.close();
    };
  }, [enabled]);

  return status;
}
