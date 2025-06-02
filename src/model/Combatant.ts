import { StatBlock } from "./StatBlock";

export interface Combatant {
    id: string;
    name: string;
    discriminator?: string;
    initiative: number;
    hp: number;
    ac: number;
    conditions: string[];
    statBlock?: StatBlock;
}

export function fromStatBlock(statBlock: StatBlock): Combatant {
    return {
        id: crypto.randomUUID(),
        name: statBlock.name,
        initiative: 0,
        hp: statBlock.hitPoints.value,
        ac: statBlock.armorClass,
        conditions: [],
        statBlock
    };
}