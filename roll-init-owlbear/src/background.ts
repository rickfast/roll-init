import OBR from "@owlbear-rodeo/sdk";
import { getPluginId } from "./getPluginId";
import { isSyncState } from "./types";

/**
 * Persistent background page. Unlike the popover, this keeps running even while
 * the action popover is closed, so it can reopen the popover when the DM shows
 * the tracker again. It watches the synced `visible` flag and fully collapses
 * the popover (closing it, so it no longer covers the map) when hidden.
 */
OBR.onReady(() => {
  const key = getPluginId("state");
  let prevVisible: boolean | undefined = undefined;

  const apply = (metadata: Record<string, unknown>) => {
    const value = metadata[key];
    // Default to visible when there's no state or it predates the flag.
    const visible = isSyncState(value) ? value.visible !== false : true;

    if (prevVisible === undefined) {
      prevVisible = visible;
      // Make sure a fresh load that starts hidden isn't left covering the map.
      if (!visible) {
        OBR.action.close();
      }
      return;
    }

    if (visible === prevVisible) {
      return;
    }
    prevVisible = visible;

    if (visible) {
      OBR.action.open();
    } else {
      OBR.action.close();
    }
  };

  OBR.room.getMetadata().then(apply);
  OBR.room.onMetadataChange(apply);
});
