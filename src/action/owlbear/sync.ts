import { invoke } from "@tauri-apps/api/core";
import { Combatant } from "../../model/Combatant";

/**
 * The trimmed, display-only view of a combatant that gets streamed to the
 * Owlbear extension. Intentionally excludes the full stat block to keep the
 * payload (and the room metadata it ends up in) small.
 */
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
}

export interface SyncState {
    /** Monotonic counter so receivers can ignore out-of-order frames. */
    version: number;
    /** When false, the player display hides the tracker (DM toggle). */
    visible: boolean;
    combatants: SyncCombatant[];
}

let version = 0;

function displayName(c: Combatant): string {
    if (!c.discriminator) {
        return c.name;
    }
    return c.discriminator.type === "number"
        ? `${c.name} ${c.discriminator.value}`
        : `${c.name} (${c.discriminator.value})`;
}

function toSync(c: Combatant, active: boolean): SyncCombatant {
    return {
        id: c.id,
        name: displayName(c),
        initiative: c.initiative,
        hp: c.hp,
        max: c.max,
        tempHp: c.tempHp,
        ac: c.ac,
        conditions: c.conditions ?? [],
        // `locked` is the app's PC flag (the "Lock (PC)" toggle on the card):
        // locked combatants are player characters, so they show HP numbers to
        // everyone on the player display.
        isPlayer: !!c.locked,
        active,
        dead: c.hp <= 0,
    };
}

/**
 * Push the current combat state to the local WebSocket bridge.
 * `selected` is an index into the combatants list (insertion order), matching
 * the tracker's own notion of whose turn it is.
 *
 * Safe to call outside Tauri (e.g. the Vite-only dev server) — the invoke
 * simply rejects and is ignored.
 */
export function pushCombatState(
    combatants: [string, Combatant][],
    selected: number,
    visible: boolean
): void {
    const state: SyncState = {
        version: ++version,
        visible,
        combatants: combatants
            .map(([, c], i) => toSync(c, i === selected))
            .sort((a, b) => b.initiative - a.initiative),
    };

    invoke("push_combat_state", { json: JSON.stringify(state) }).catch(() => {
        /* bridge unavailable or not running in Tauri — ignore */
    });
}
