import { StatBlock } from "./StatBlock";

export interface Combatant {
    id: string;
    name: string;
    initiative: number;
    hp: number;
    ac: number;
    conditions: string[];
    statBlock?: StatBlock;
    discriminator?: Discriminator;
    locked?: boolean;
    deathSaves: DeathSaves;
}

export interface DeathSaves {
    death: number;
    life: number;
}

export interface Discriminator {
    type: "color" | "number";
    value: string | number;
}

export function fromStatBlock(statBlock: StatBlock): Combatant {
    return {
        id: crypto.randomUUID(),
        name: statBlock.name,
        initiative: 0,
        hp: statBlock.hitPoints.value,
        ac: statBlock.armorClass,
        conditions: [],
        statBlock,
        deathSaves: { death: 0, life: 0 },
    };
}
