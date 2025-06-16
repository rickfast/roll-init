import { DamageType, Language, StatBlock } from "../../model/StatBlock";
import { Alignment, ConditionI, ConditionImmuneClass, CRClass, FluffyType, Immune, Initiative, Monster, PurpleType, ResistClass, Size, Speed, TypeElement, VulnerableClass } from "../../model/5etools/Bestiary.ts";
import { Spell as Spell5e } from '../../model/5etools/Spells.ts';
import { Size as StatBlockSize, Speed as StatBlockSpeed } from "../../model/StatBlock";
import { Entry, Spell } from "../../model/Spell.ts";

function mapSize(size: Size[]): StatBlockSize {
    if (!size || size.length === 0) {
        return "Medium"; // Default to Medium if no size is provided
    }
    
    switch (size[0]) {
        case "T":
            return "Tiny";
        case "S":
            return "Small";
        case "M":
            return "Medium";
        case "L":
            return "Large";
        case "H":
            return "Huge";
        default:
            return "Gargantuan";
    }
}

function mapType(type: PurpleType | TypeElement): string {
    if (!type) {
        return "Unknown";
    }
    if (typeof type === "string") {
        return type;
    } else if (type.type) {
        if (typeof type.type === "string") {
            return type.type;
        } else if (type.type.hasOwnProperty("choose")) {
            return (type.type as FluffyType).choose[0];
        }
    }

    throw new Error(`Unexpected type format: ${JSON.stringify(type)}`);
}

function mapAlignment(alignment: Alignment[]): string {
    const result = alignment?.map(a => {
        if (a && typeof a !== "string") {
            return mapAlignment((a as any).alignment as Alignment[]);
        } 

        switch (a) {
            case "C":
                return "Chaotic";
            case "L":
                return "Lawful";
            case "N":
                return "Neutral";
            case "G":
                return "Good";
            case "E":
                return "Evil";
            case "U":
                return "Unaligned";
            default:
                return "Any";
        }
    });

    return result ? result.join(" ") : "";
}

function mapChallengeRating(cr: string | CRClass): number {
    if (!cr) {
        return 0;
    } else if (typeof cr === "string") {
        return parseFloat(cr);
    } else if (typeof cr === "object" && cr.hasOwnProperty("cr")) {
        return parseFloat(cr.cr);
    } else {
        throw new Error(`Invalid CR format: ${JSON.stringify(cr)}`);
    }
}

function mapDamageResistances(resistances: (Immune | ResistClass)[]): DamageType[] {
    return resistances.filter(r => typeof r === "string")
        .map(r => r as DamageType);
}

function mapImmunities(immunities: Immune[]): DamageType[] {
    return immunities.filter(i => typeof i === "string")
        .map(i => i as DamageType);
}

function mapConditionImmunities(conditionImmune: (ConditionI | ConditionImmuneClass)[]): string[] {
    return conditionImmune.flatMap(c => {
        if (typeof c === "string") {
            return [c as DamageType];
        } else if (typeof c === "object" && c.hasOwnProperty("conditionImmune")) {
            return c.conditionImmune;
        }
        return [];
    })
}

function mapDamageVulnerabilities(vulnerable: (Immune | VulnerableClass)[]): DamageType[] {
    return vulnerable.flatMap(v => {
        if (typeof v === "string") {
            return [v as DamageType];
        } else if (typeof v === "object" && v.hasOwnProperty("vulnerable")) {
            return v.vulnerable;
        }
        return [];
    });
}

function mapSpeed(speed: Speed): StatBlockSpeed[] {
    return Object.entries(speed).map(([type, value]) => {
        return {
            type: type,
            // @ts-ignore
            speed: typeof value === "number" ? value : value.climb || "0",
        } as StatBlockSpeed;
    });
}

function mapInitiative(initiative: Initiative | undefined): number {
    if (!initiative) {
        return 0; // Default initiative if not provided
    } else if (typeof initiative === "number") {
        return initiative;
    } else if (initiative && typeof initiative === "object" && initiative.hasOwnProperty("proficiency")) {
        return initiative.proficiency;
    }
    return 0;
}

export function transform(monster: Monster): StatBlock {
    console.log(`Transforming monster: ${JSON.stringify(monster)}`);
    const statBlock: StatBlock = {
        name: monster.name,
        size: mapSize(monster.size),
        type: mapType(monster.type),
        challengeRating: mapChallengeRating(monster.cr),
        alignment: mapAlignment(monster.alignment),
        armorClass: monster.ac[0] || 0,
        hitPoints: { value: monster.hp.average, hitDice: monster.hp.formula },
        speed: mapSpeed(monster.speed),
        initiativeBonus: mapInitiative(monster.initiative),
        abilityScores: {
            str: monster.str,
            dex: monster.dex,
            con: monster.con,
            int: monster.int,
            wis: monster.wis,
            cha: monster.cha,
        },
        savingThrows: {
            str: Number(monster.save?.str || 0),
            dex: Number(monster.save?.dex || 0),
            con: Number(monster.save?.con || 0),
            int: Number(monster.save?.int || 0),
            wis: Number(monster.save?.wis || 0),
            cha: Number(monster.save?.cha || 0)
        },
        conditionImmunities: (monster.conditionImmune ? mapConditionImmunities(monster.conditionImmune) : []),
        damageImmunities: (monster.immune ? mapImmunities(monster.immune) : []) as DamageType[],
        damageResistances: (monster.resist ? mapDamageResistances(monster.resist) : []) as DamageType[],
        damageVulnerabilities: (monster.vulnerable ? mapDamageVulnerabilities(monster.vulnerable) : []),
        skill: {},
        passive: 10,
    
        languages: monster.languages as Language[] || [],
        spellcasting: undefined,
        // @ts-ignore
        traits: monster.trait ? monster.trait.map(trait => ({
            name: trait.name,
            desc: trait.entries ? trait.entries.join(" ") : "",
        })) : [],
        // @ts-ignore
        actions: monster.action ? monster.action.map(action => ({
            name: action.name,
            desc: action.entries ? action.entries.join(" ") : "",
        })) : [],
    };


    // if (monster.spellcasting) {
    //     for (const spell of monster.spellcasting) {
    //         const spellcastingEntry = {
    //             name: spell.name,
    //             level: spell.level,
    //             spells: spell.spells,
    //             saveDC: spell.saveDC,
    //             attackBonus: spell.attackBonus,
    //         };
    //         statBlock.spellcasting.push(spellcastingEntry);
    //     }
    // }

    // if (monster.action) {
    //     for (const action of monster.action) {
    //         const actionEntry = {
    //             name: action.name,
    //             type: action.type,
    //             description: action.description,
    //         };
    //         statBlock.actions.push(actionEntry);
    //     }
    // }

    // Add other properties similarly...

    return statBlock;
}

export function transformSpell(spell: Spell5e): Spell {
    // Map level
    const levelMap = [
        'Cantrip', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'
    ] as const;
    const level = levelMap[spell.level] as Spell['level'];

    // Map school
    const schoolMap: Record<string, Spell['school']> = {
        A: 'Abjuration',
        C: 'Conjuration',
        D: 'Divination',
        E: 'Enchantment',
        V: 'Evocation',
        I: 'Illusion',
        N: 'Necromancy',
        T: 'Transmutation'
    };
    const school = schoolMap[spell.school] || 'Abjuration';

    // Map casting time
    const time = spell.time?.[0];
    let castingTime: Spell['castingTime'] = {
        type: 'action',
        duration: 1
    };
    if (time) {
        let type: Spell['castingTime']['type'] = 'action';
        switch (time.unit) {
            case 'action': type = 'action'; break;
            case 'bonus': type = 'bonus action'; break;
            case 'reaction': type = 'reaction'; break;
            case 'minute': type = 'minute'; break;
            case 'hour': type = 'hour'; break;
        }
        castingTime = {
            type,
            duration: time.number
        };
    }

    // Map range
    let rangeType: Spell['range']['type'] = 'Self';
    let distance: number | undefined = undefined;
    if (spell.range?.distance) {
        switch (spell.range.distance.type) {
            case 'self': rangeType = 'Self'; break;
            case 'touch': rangeType = 'Touch'; break;
            case 'feet': rangeType = 'Feet'; distance = spell.range.distance.amount; break;
            case 'miles': rangeType = 'Miles'; distance = spell.range.distance.amount; break;
            case 'sight': rangeType = 'Sight'; break;
            case 'unlimited': rangeType = 'Unlimited'; break;
        }
    }
    const range: Spell['range'] = { type: rangeType };
    if (distance !== undefined) range.distance = distance;

    // Map components
    const components = {
        verbal: !!spell.components.v,
        somatic: !!spell.components.s,
        material: !!spell.components.m,
        materialComponents: typeof spell.components.m === 'object'
            ? spell.components.m.text
            : (typeof spell.components.m === 'string' ? spell.components.m : undefined)
    };

    // Map duration
    let duration = '';
    let concentration = false;
    if (spell.duration && spell.duration.length > 0) {
        const d = spell.duration[0];
        concentration = !!d.concentration;
        switch (d.type) {
            case 'instant': duration = 'Instantaneous'; break;
            case 'timed':
                if (d.duration) {
                    duration = `${d.duration.amount} ${d.duration.type}${d.duration.amount > 1 ? 's' : ''}`;
                    if (d.duration.upTo) duration = `Up to ${duration}`;
                }
                break;
            case 'permanent': duration = 'Permanent'; break;
            case 'special': duration = 'Special'; break;
        }
    }

    // Ritual
    const ritual = !!spell.meta?.ritual;

    // Description
    function flattenEntries(entries: Array<any>): Entry[] {
        const result: Entry[] = [];
        for (const entry of entries) {
            if (typeof entry === 'string') {
                result.push({ text: entry });
            } else if (entry.entries) {
                if (entry.name) {
                    result.push({ title: entry.name, text: entry.entries.join(' ') });
                } else {
                    result.push(...flattenEntries(entry.entries));
                }
            }
        }
        return result;
    }
    const description = flattenEntries(spell.entries);

    // Higher level
    let higherLevel: string | undefined = undefined;
    if (spell.entriesHigherLevel && spell.entriesHigherLevel.length > 0) {
        higherLevel = spell.entriesHigherLevel.map(e => e.entries.join(' ')).join('\n');
    }

    // Classes (best effort, as 5etools spells may not have a direct class list)
    // You may want to improve this if you have class info elsewhere
    const classes: Spell['classes'] = [];

    return {
        name: spell.name,
        level,
        school,
        castingTime,
        range,
        components,
        duration,
        concentration,
        ritual,
        description,
        higherLevel,
        classes
    };
}