import { Bestiary, Monster } from "../../model/5etools/Bestiary.ts";
import { transform, transformSpell } from "./transform.ts";
import { StatBlock } from "../../model/StatBlock.ts";
import { Spells } from "../../model/5etools/Spells.ts";

function modifier(mod: string): string {
    const num = parseInt(mod, 10);

    return num > 0 ? `+${num}` : num.toString();
}

function evaluate(token: string, value: string) {
    switch (token) {
        case "atkr":
            switch (value) {
                case "m":
                    return 'Melee Weapon Attack';
                case "r":
                    return 'Ranged Weapon Attack';
                default:
                    return 'Melee or Ranged Weapon Attack';
            }
        case "hit":
            return `Roll: ${modifier(value)}`;
        case "h":
            return 'Hit: ';
        case "spell":
        case "status":
        case "condition":
        case "creature":
        case "item":
        case "quickref":
        case "adventure":
        case "sense":
        case "deity":
        case "table":
        case "variantrule":
            return value.split("|")[0];
        default:
            return value.split(" ")[0];
    }
}

function sanitizeContent(content: string): string {
    return content = content.replace(/\{@(\w+)(?:\s+([^}]+))?\}/g, (_, token, value) => {
        const evaluated = evaluate(token, value ?? "");
        return evaluated;
    });
}

const inScopeBooks = new Set<string>(["XMM"]);

const bookLookup = new Map<string, string>([
    ["XMM", "Monster Manual (2024)"],
    ["MM", "Monster Manual"]
]);

export function importSpells(json: string): string {
    const sanitized = sanitizeContent(json);
    const parsed = JSON.parse(sanitized) as Spells;
    const spells = parsed.spell
        .map(transformSpell)
        .map(spell => [spell.name, spell])

    console.log(spells);

    return JSON.stringify(Object.fromEntries(spells), null, 2)
}

export function importBestiary(json: string): string {
    const sanitized = sanitizeContent(json);
    const parsed = JSON.parse(sanitized) as Bestiary;

    const monsters = parsed.monster
        .filter(monster => !monster.hasOwnProperty("_copy"))
        .filter(monster => monster.ac != undefined)
        .filter(monster => inScopeBooks.has(monster.source))
        .map((monster: Monster) => {
            const statBlock: StatBlock = transform(monster);
            statBlock.source = bookLookup.get(monster.source) || "Unknown";
            // console.log(`Transformed stat block for ${monster.name}:`, statBlock);
            return statBlock;
        }).map(statBlock => {
            return [statBlock.name, statBlock] as [string, StatBlock];
        });

    return JSON.stringify(Object.fromEntries(monsters), null, 2);
}