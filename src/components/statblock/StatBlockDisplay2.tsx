import { Badge, Text } from "@mantine/core";
import { PiShieldCheckeredFill as IconShield } from "react-icons/pi";
import { TbHealthRecognition as IconHeart } from "react-icons/tb";
import { TbBrandSpeedtest as IconSpeed } from "react-icons/tb";
import { GiDiceTwentyFacesTwenty as IconInit } from "react-icons/gi";
import { StatBlock } from "../../model/StatBlock";
import { formatModifier, getModifier } from "../../util";
import "../reference.css";

interface StatBlockDisplayProps {
    statBlock: StatBlock;
    loading?: boolean;
}

const ABILITY_ORDER = ["str", "dex", "con", "int", "wis", "cha"];

export const StatBlockDisplay2 = ({
    statBlock,
    loading = false,
}: StatBlockDisplayProps) => {
    const getCRColor = (cr: number) => {
        if (cr <= 1) return "green";
        if (cr <= 5) return "yellow";
        if (cr <= 10) return "orange";
        return "red";
    };

    const formatSpeed = () =>
        (statBlock.speed ?? []).map((s) => `${s.type} ${s.speed}`).join(", ") ||
        "—";

    const formatSavingThrows = () => {
        const saves: string[] = [];
        Object.entries(statBlock.savingThrows ?? {}).forEach(
            ([ability, bonus]) => {
                if (bonus !== 0) {
                    saves.push(
                        `${ability.toUpperCase()} ${formatModifier(bonus)}`
                    );
                }
            }
        );
        return saves.length > 0 ? saves.join(", ") : null;
    };

    const formatSkills = () => {
        if (!statBlock.skills || Object.keys(statBlock.skills).length === 0)
            return null;
        return Object.entries(statBlock.skills)
            .map(([skill, bonus]) => `${skill} ${formatModifier(bonus)}`)
            .join(", ");
    };

    if (loading) {
        return (
            <div className="ref-card" style={{ opacity: 0.6 }}>
                <Text ta="center" c="dimmed">
                    Generating stat block…
                </Text>
            </div>
        );
    }

    const initBonus =
        statBlock.initiativeBonus ??
        (statBlock.abilityScores?.dex !== undefined
            ? getModifier(statBlock.abilityScores.dex)
            : undefined);

    const savingThrows = formatSavingThrows();
    const skills = formatSkills();

    const FeatureList = ({
        title,
        features,
        html,
    }: {
        title: string;
        features: { name: string; desc: string }[];
        html?: boolean;
    }) => (
        <div>
            <h3 className="ref-section-title">{title}</h3>
            {features.map((f, i) => (
                <p className="ref-feature" key={i}>
                    <span className="fname">{f.name}.</span>
                    {html ? (
                        <span dangerouslySetInnerHTML={{ __html: f.desc }} />
                    ) : (
                        <span>{f.desc}</span>
                    )}
                </p>
            ))}
        </div>
    );

    return (
        <div className="ref-card">
            <div className="ref-stack">
                {/* header */}
                <div>
                    <h2 className="ref-name">
                        {statBlock.name || "Unnamed Creature"}
                    </h2>
                    <div className="ref-subtitle">
                        {[statBlock.size, statBlock.type]
                            .filter(Boolean)
                            .join(" ")}
                        {statBlock.subtype ? ` (${statBlock.subtype})` : ""}
                        {statBlock.alignment ? `, ${statBlock.alignment}` : ""}
                    </div>
                    <div className="ref-badges">
                        {statBlock.size && (
                            <Badge color="gray" variant="default">
                                {statBlock.size}
                            </Badge>
                        )}
                        {statBlock.challengeRating !== undefined && (
                            <Badge
                                color={getCRColor(statBlock.challengeRating)}
                                variant="filled"
                            >
                                CR {statBlock.challengeRating}
                            </Badge>
                        )}
                    </div>
                </div>

                {/* stat band */}
                <div className="ref-band">
                    <div className="band-item">
                        <span className="band-icon">
                            <IconShield size={20} />
                        </span>
                        <div>
                            <div className="band-label">Armor Class</div>
                            <div className="band-value">
                                {statBlock.armorClass}
                            </div>
                        </div>
                    </div>
                    <div className="band-item">
                        <span className="band-icon">
                            <IconHeart size={20} />
                        </span>
                        <div>
                            <div className="band-label">Hit Points</div>
                            <div className="band-value">
                                {statBlock.hitPoints?.value}
                                {statBlock.hitPoints?.hitDice && (
                                    <Text span size="xs" c="dimmed">
                                        {" "}
                                        ({statBlock.hitPoints.hitDice})
                                    </Text>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="band-item">
                        <span className="band-icon">
                            <IconSpeed size={20} />
                        </span>
                        <div>
                            <div className="band-label">Speed</div>
                            <div className="band-value">{formatSpeed()}</div>
                        </div>
                    </div>
                    {initBonus !== undefined && (
                        <div className="band-item">
                            <span className="band-icon">
                                <IconInit size={20} />
                            </span>
                            <div>
                                <div className="band-label">Initiative</div>
                                <div className="band-value">
                                    {formatModifier(initBonus)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* ability scores */}
                {statBlock.abilityScores && (
                    <div className="ref-abilities">
                        {ABILITY_ORDER.map((ability) => {
                            const score = statBlock.abilityScores[ability];
                            if (score === undefined) return null;
                            return (
                                <div className="ref-ability" key={ability}>
                                    <div className="abbr">
                                        {ability.toUpperCase()}
                                    </div>
                                    <div className="score">{score}</div>
                                    <div className="mod">
                                        {formatModifier(getModifier(score))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* meta */}
                <div className="ref-meta">
                    {savingThrows && (
                        <div className="ref-meta-row">
                            <span className="k">Saving Throws</span>
                            <span className="v">{savingThrows}</span>
                        </div>
                    )}
                    {skills && (
                        <div className="ref-meta-row">
                            <span className="k">Skills</span>
                            <span className="v">{skills}</span>
                        </div>
                    )}
                    {statBlock.damageVulnerabilities?.length > 0 && (
                        <div className="ref-meta-row">
                            <span className="k">Vulnerabilities</span>
                            <span className="v">
                                {statBlock.damageVulnerabilities.join(", ")}
                            </span>
                        </div>
                    )}
                    {statBlock.damageResistances?.length > 0 && (
                        <div className="ref-meta-row">
                            <span className="k">Resistances</span>
                            <span className="v">
                                {statBlock.damageResistances.join(", ")}
                            </span>
                        </div>
                    )}
                    {statBlock.damageImmunities?.length > 0 && (
                        <div className="ref-meta-row">
                            <span className="k">Damage Immunities</span>
                            <span className="v">
                                {statBlock.damageImmunities.join(", ")}
                            </span>
                        </div>
                    )}
                    {statBlock.conditionImmunities?.length > 0 && (
                        <div className="ref-meta-row">
                            <span className="k">Condition Immunities</span>
                            <span className="v">
                                {statBlock.conditionImmunities.join(", ")}
                            </span>
                        </div>
                    )}
                    {statBlock.senses && (
                        <div className="ref-meta-row">
                            <span className="k">Senses</span>
                            <span className="v">{statBlock.senses}</span>
                        </div>
                    )}
                    {statBlock.languages?.length > 0 && (
                        <div className="ref-meta-row">
                            <span className="k">Languages</span>
                            <span className="v">
                                {statBlock.languages.join(", ")}
                            </span>
                        </div>
                    )}
                </div>

                {/* spellcasting */}
                {statBlock.spellcasting && (
                    <div>
                        <h3 className="ref-section-title">Spellcasting</h3>
                        <p className="ref-feature">
                            <span>
                                Spellcasting ability is{" "}
                                <strong>{statBlock.spellcasting.ability}</strong>{" "}
                                (spell save DC{" "}
                                <strong>{statBlock.spellcasting.saveDc}</strong>,{" "}
                                {formatModifier(
                                    statBlock.spellcasting.attackBonus
                                )}{" "}
                                to hit with spell attacks).
                            </span>
                        </p>
                    </div>
                )}

                {statBlock.traits?.length > 0 && (
                    <FeatureList title="Traits" features={statBlock.traits} />
                )}
                {statBlock.actions?.length > 0 && (
                    <FeatureList
                        title="Actions"
                        features={statBlock.actions}
                        html
                    />
                )}
                {statBlock.bonusActions && statBlock.bonusActions.length > 0 && (
                    <FeatureList
                        title="Bonus Actions"
                        features={statBlock.bonusActions}
                    />
                )}
                {statBlock.reactions && statBlock.reactions.length > 0 && (
                    <FeatureList
                        title="Reactions"
                        features={statBlock.reactions}
                    />
                )}
                {statBlock.legendaryActions &&
                    statBlock.legendaryActions.length > 0 && (
                        <FeatureList
                            title="Legendary Actions"
                            features={statBlock.legendaryActions}
                        />
                    )}
            </div>
        </div>
    );
};
