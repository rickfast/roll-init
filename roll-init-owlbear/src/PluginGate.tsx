import OBR from "@owlbear-rodeo/sdk";
import { ReactNode, useEffect, useState } from "react";

/**
 * Only render children once we're running inside Owlbear and the SDK is ready.
 * Outside Owlbear (e.g. opening the dev URL directly) it renders a hint instead.
 */
export function PluginGate({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (OBR.isAvailable) {
      return OBR.onReady(() => setReady(true));
    }
    setAvailable(false);
  }, []);

  if (!available) {
    return (
      <div className="gate">
        Open this page from inside Owlbear Rodeo as an extension.
      </div>
    );
  }
  if (!ready) {
    return <div className="gate">Connecting to Owlbear…</div>;
  }
  return <>{children}</>;
}
