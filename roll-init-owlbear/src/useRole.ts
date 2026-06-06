import OBR from "@owlbear-rodeo/sdk";
import { useEffect, useState } from "react";

export type Role = "GM" | "PLAYER";

/** Track the local player's role, updating if it changes mid-session. */
export function useRole(): Role {
  const [role, setRole] = useState<Role>("PLAYER");

  useEffect(() => {
    let cancelled = false;
    OBR.player.getRole().then((r) => {
      if (!cancelled) setRole(r);
    });
    const unsubscribe = OBR.player.onChange((player) => setRole(player.role));
    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  return role;
}
