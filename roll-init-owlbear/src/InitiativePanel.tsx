import { Ref, useEffect, useRef } from "react";
import { Role } from "./useRole";
import { BridgeStatus } from "./useBridge";
import { SyncCombatant, SyncState } from "./types";
import { conditionIcons } from "./conditionIcons";

interface Props {
  role: Role;
  state: SyncState | null;
  bridgeStatus: BridgeStatus;
}

export function InitiativePanel({ role, state, bridgeStatus }: Props) {
  // DM can hide the tracker from players; the GM window still sees it (with a note).
  const hidden = state?.visible === false;
  const combatants = hidden
    ? []
    : [...(state?.combatants ?? [])].sort(
        (a, b) => b.initiative - a.initiative
      );

  // Keep the active combatant scrolled into view as the turn advances.
  const activeId = combatants.find((c) => c.active)?.id;
  const activeRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [activeId]);

  let body;
  if (hidden) {
    // Players see a neutral message; the GM sees that it's deliberately hidden.
    body = (
      <div className="empty">
        {role === "GM" ? "Tracker hidden from players" : "No active combat."}
      </div>
    );
  } else if (combatants.length === 0) {
    body = (
      <div className="empty">
        {role === "GM"
          ? "Waiting for combat from Roll Initiative…"
          : "No active combat."}
      </div>
    );
  } else {
    body = (
      <ul className="list">
        {combatants.map((c) => (
          <Row
            key={c.id}
            c={c}
            role={role}
            rowRef={c.active ? activeRef : undefined}
          />
        ))}
      </ul>
    );
  }

  return (
    <div className="panel">
      <header className="panel-header">
        <span className="panel-title">Initiative</span>
        {role === "GM" && (
          <span className={`bridge bridge-${bridgeStatus}`}>
            <span className="bridge-dot" />
            {bridgeStatus === "connected"
              ? "Synced"
              : bridgeStatus === "connecting"
                ? "Connecting…"
                : "App offline"}
          </span>
        )}
      </header>
      {body}
    </div>
  );
}

function Row({
  c,
  role,
  rowRef,
}: {
  c: SyncCombatant;
  role: Role;
  rowRef?: Ref<HTMLLIElement>;
}) {
  // PCs show numbers to everyone; monster numbers are GM-only.
  const showNumbers = role === "GM" || c.isPlayer;
  const pct = c.max > 0 ? Math.max(0, Math.min(100, (c.hp / c.max) * 100)) : 0;
  const hpClass = pct > 50 ? "hp-high" : pct > 25 ? "hp-mid" : "hp-low";

  return (
    <li
      ref={rowRef}
      className={`row${c.active ? " active" : ""}${c.dead ? " dead" : ""}`}
    >
      <div className="init" title="Initiative">
        {c.initiative}
      </div>

      <div className="body">
        <div className="row-top">
          <span className="name-and-status">
            <span className="name">{c.name}</span>
            {c.conditions.length > 0 && (
              <span className="status-icons">
                {c.conditions.map((cond) => {
                  const Icon = conditionIcons[cond];
                  return Icon ? (
                    <span className="status-icon" key={cond} title={cond}>
                      <Icon />
                    </span>
                  ) : (
                    // Fallback for any unmapped condition: show its name.
                    <span className="chip" key={cond} title={cond}>
                      {cond}
                    </span>
                  );
                })}
              </span>
            )}
          </span>
          <span className="ac" title="Armor Class">
            {c.ac}
          </span>
        </div>

        <div className="hp">
          <div className="hp-bar">
            <div className={`hp-fill ${hpClass}`} style={{ width: `${pct}%` }} />
            {c.tempHp ? (
              <div
                className="hp-temp"
                style={{
                  width: `${Math.min(100, (c.tempHp / Math.max(c.max, 1)) * 100)}%`,
                }}
              />
            ) : null}
          </div>
          {showNumbers && (
            <span className="hp-num">
              {c.hp}
              <span className="hp-sep">/</span>
              {c.max}
              {c.tempHp ? <span className="hp-temp-num">+{c.tempHp}</span> : null}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
