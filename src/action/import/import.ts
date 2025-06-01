import { Bestiary, Monster } from "../../model/5etools/Bestiary.ts";
import { transform } from "./transform.ts";
import { StatBlock } from "../../../../5e-import/StatBlock.ts";

export function importBestiary(json: string) {
    function modifier(mod: string): string {
        const num = parseInt(mod, 10);

        return num > 0 ? `+${num}` : num.toString();
    }

    const tokens = new Set<string>();
    const examples = new Map<string, string>();

    function evaluate(token: string, value: string) {
        tokens.add(token);
        examples.set(token, value);

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
        content = content.replace(/\{@(\w+)(?:\s+([^}]+))?\}/g, (_, token, value) => {
            const evaluated = evaluate(token, value ?? "");
            return evaluated;
        });
        return content.replace(/\{@(\w+)\s+([^}]+)\}/g, (_, token, value) => {
            // console.log(`Sanitizing token: ${token} with value: ${value}`);
            const evaluated = evaluate(token, value);
            // console.log(`Evaluated to: ${evaluated}`);
            return evaluated;
        });
    }

    const inScopeBooks = new Set<string>(["XMM"]);

    const bookLookup = new Map<string, string>([
        ["XMM", "Monster Manual (2024)"],
        ["MM", "Monster Manual"]
    ]);

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