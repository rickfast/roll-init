import { DamageType, Language, StatBlock } from "../../../../5e-import/StatBlock";
import { Alignment, ConditionI, ConditionImmuneClass, CRClass, FluffyType, Immune, Monster, PurpleType, ResistClass, Size, Speed, TypeElement, VulnerableClass } from "../../model/5etools/Bestiary.ts";
import { Size as StatBlockSize, Speed as StatBlockSpeed } from "../../../../5e-import/StatBlock";

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