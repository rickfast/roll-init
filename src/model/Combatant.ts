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