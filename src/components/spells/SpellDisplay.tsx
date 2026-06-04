import { Badge } from "@mantine/core";
import { Spell } from "../../model/Spell";
import "../reference.css";

interface SpellDisplayProps {
    spell: Spell;
}

export const SpellDisplay = ({ spell }: SpellDisplayProps) => {
    const formatCastingTime = () => {
        const { type, duration } = spell.castingTime;
        if (duration === 1) return `1 ${type}`;
        return `${duration} ${type}${duration > 1 ? "s" : ""}`;
    };

    const formatRange = () => {
        if (
            spell.range.type === "Self" ||
            spell.range.type === "Touch" ||
            spell.range.type === "Sight" ||
            spell.range.type === "Unlimited"
        ) {
            return spell.range.type;
        }
        return `${spell.range.distance} ${spell.range.type.toLowerCase()}`;
    };

    const formatComponents = () => {
        const components = [];
        if (spell.components.verbal) components.push("V");
        if (spell.components.somatic) components.push("S");
        if (spell.components.material) {
            components.push(
                spell.components.materialComponents
                    ? `M (${spell.components.materialComponents})`
                    : "M"
            );
        }
        return components.join(", ") || "—";
    };

    const getSchoolColor = (school: string) => {
        const colors: Record<string, string> = {
            Abjuration: "blue",
            Conjuration: "yellow",
            Divination: "grape",
            Enchantment: "pink",
            Evocation: "red",
            Illusion: "indigo",
            Necromancy: "dark",
            Transmutation: "green",
        };
        return colors[school] || "gray";
    };

    const levelLabel =
        spell.level === "Cantrip" ? "Cantrip" : `${spell.level} Level`;

    return (
        <div className="ref-card">
            <div className="ref-stack">
                {/* header */}
                <div>
                    <h2 className="ref-name">{spell.name}</h2>
                    <div className="ref-subtitle">
                        {levelLabel} · {spell.school}
                    </div>
                    <div className="ref-badges">
                        <Badge color="orange" variant="filled">
                            {levelLabel}
                        </Badge>
                        <Badge
                            color={getSchoolColor(spell.school)}
                            variant="light"
                        >
                            {spell.school}
                        </Badge>
                        {spell.ritual && (
                            <Badge color="violet" variant="outline">
                                Ritual
                            </Badge>
                        )}
                        {spell.concentration && (
                            <Badge color="yellow" variant="outline">
                                Concentration
                            </Badge>
                        )}
                    </div>
                </div>

                {/* stat grid */}
                <div className="spell-stats">
                    <div className="stat">
                        <div className="label">Casting Time</div>
                        <div className="value">{formatCastingTime()}</div>
                    </div>
                    <div className="stat">
                        <div className="label">Range</div>
                        <div className="value">{formatRange()}</div>
                    </div>
                    <div className="stat">
                        <div className="label">Components</div>
                        <div className="value">{formatComponents()}</div>
                    </div>
                    <div className="stat">
                        <div className="label">Duration</div>
                        <div className="value">
                            {spell.concentration ? "Concentration, " : ""}
                            {spell.duration}
                        </div>
                    </div>
                </div>

                {/* classes */}
                {spell.classes.length > 0 && (
                    <div className="ref-meta-row" style={{ padding: 0 }}>
                        <span className="k">Classes</span>
                        <span className="v">{spell.classes.join(", ")}</span>
                    </div>
                )}

                <hr className="ref-rule" />

                {/* description */}
                <div>
                    {spell.description.map((entry, index) => (
                        <p
                            className="ref-feature"
                            key={index}
                            style={{ marginBottom: 12 }}
                        >
                            {entry.title && (
                                <span className="fname">{entry.title}. </span>
                            )}
                            <span>{entry.text}</span>
                        </p>
                    ))}
                </div>

                {/* higher level */}
                {spell.higherLevel && (
                    <div>
                        <hr className="ref-rule thin" />
                        <p className="ref-feature">
                            <span className="fname">At Higher Levels.</span>
                            <span>{spell.higherLevel}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
