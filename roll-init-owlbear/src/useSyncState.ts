import OBR from "@owlbear-rodeo/sdk";
import { useEffect, useState } from "react";
import { getPluginId } from "./getPluginId";
import { isSyncState, SyncState } from "./types";

/**
 * Read the shared combat state from room metadata and update on every change.
 * Works for every window (GM and players) — Owlbear keeps room metadata in
 * sync across the room automatically.
 */
export function useSyncState(): SyncState | null {
  const [state, setState] = useState<SyncState | null>(null);

  useEffect(() => {
    const key = getPluginId("state");
    const read = (metadata: Record<string, unknown>) => {
      const value = metadata[key];
      setState(isSyncState(value) ? value : null);
    };

    OBR.room.getMetadata().then(read);
    return OBR.room.onMetadataChange(read);
  }, []);

  return state;
}
