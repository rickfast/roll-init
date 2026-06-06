import { useRole } from "./useRole";
import { useBridge } from "./useBridge";
import { useSyncState } from "./useSyncState";
import { InitiativePanel } from "./InitiativePanel";

export function App() {
  const role = useRole();
  // Only the GM window bridges localhost → room metadata.
  const bridgeStatus = useBridge(role === "GM");
  const state = useSyncState();

  return (
    <InitiativePanel role={role} state={state} bridgeStatus={bridgeStatus} />
  );
}
