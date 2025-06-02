export interface StatBlock {
    abilityScores: AbilityScores;
    actions: Feature[];
    alignment: string;
    initiativeBonus?: number;
    armorClass: number;// | ArmorClassObject;
    bonusActions?: Feature[];
    challengeRating: number;
    conditionImmunities: string[];
    damageImmunities: DamageType[];
    damageResistances: DamageType[];
    damageVulnerabilities: DamageType[];
    hitPoints: HitPointsObject;
    lairActions?: string[];
    languages: Language[];
    legendaryActions?: Feature[];
    name: string;
    reactions?: Feature[];
    savingThrows: Record<'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha', number>;
    senses?: string;
    size: Size;
    skills?: { [key: string]: number };
    speed: Speed[];
    spellcasting?: Spellcasting;
    subtype?: string;
    traits: Feature[];
    type: string;
    source?: string;
    [property: string]: any;
}

export interface Speed {
    type: string;
    speed: string;
}

export interface AbilityScores {
    cha: number;
    con: number;
    dex: number;
    int: number;
    str: number;
    wis: number;
    [property: string]: any;
}

export interface Feature {
    desc: string;
    name: string;
    usage?: Usage;
    [property: string]: any;
}

export interface Usage {
    recharge?: string;
    times?: number;
    type?: Type;
    [property: string]: any;
}

export type Type = "recharge" | "perDay" | "perRest";

// export interface ArmorClassObject {
//     type?: string;
//     value: number;
//     [property: string]: any;
// }

export type DamageType = "acid" | "bludgeoning" | "cold" | "fire" | "force" | "lightning" | "necrotic" | "piercing" | "poison" | "psychic" | "radiant" | "slashing" | "thunder";
// export type DamageType = "cold" | "acid" | "lightning" | "fire" | "poison" | "thunder" | "psychic" | "necrotic" | "slashing" | "radiant" | "bludgeoning" | "piercing"

export interface HitPointsObject {
    value: number;
    hitDice: string;
    [property: string]: any;
}

export type Language = "Common" | "Dwarvish" | "Elvish" | "Giant" | "Gnomish" | "Goblin" | "Halfling" | "Orc" | "Abyssal" | "Celestial" | "Draconic" | "Deep Speech" | "Infernal" | "Primordial" | "Sylvan" | "Undercommon" | "Aquan" | "Auran" | "Ignan" | "Terran" | "Telepathy" | "Thieves’ Cant" | "Druidic" | "Any";

export type Size = "Tiny" | "Small" | "Medium" | "Large" | "Huge" | "Gargantuan";

export interface Spellcasting {
    ability: string;
    attackBonus: number;
    level: number;
    saveDc: number;
    slots?: { [key: string]: number };
    spells?: Spells;
    [property: string]: any;
}

export interface Spells {
    atWill?: string[];
    daily?: { [key: string]: string[] };
    perLevel?: { [key: string]: string[] };
    [property: string]: any;
}
