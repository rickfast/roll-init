// Mirror of the SyncState contract produced by the Roll Initiative app
// (src/action/owlbear/sync.ts). Keep these two in sync.

export interface SyncCombatant {
  id: string;
  name: string;
  initiative: number;
  hp: number;
  max: number;
  tempHp?: number;
  ac: number;
  conditions: string[];
  /** PCs show HP numbers to everyone; monsters show only a bar to players. */
  isPlayer: boolean;
  /** True for the combatant whose turn it currently is. */
  active: boolean;
  dead: boolean;
  /** death = failed saves, life = successful saves (0-3 each).
   *  Optional for backward-compatibility with frames sent before this field. */
  deathSaves?: { death: number; life: number };
}

export interface SyncState {
  version: number;
  /** When false, the DM has hidden the tracker from the player display.
   *  Optional for backward-compatibility with frames sent before this field. */
  visible?: boolean;
  combatants: SyncCombatant[];
}

export function isSyncState(value: unknown): value is SyncState {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as SyncState).version === "number" &&
    Array.isArray((value as SyncState).combatants)
  );
}
