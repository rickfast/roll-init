export interface Bestiary {
    monster: Monster[];
}

export interface Monster {
    name: string;
    source: VersionSource;
    page?: number;
    size: Size[];
    type: PurpleType | TypeElement;
    alignment: Alignment[];
    ac: number[];
    hp: HP;
    speed: Speed;
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    save?: Save;
    skill?: Skill;
    passive: number;
    languages?: string[];
    cr: CRClass | string;
    spellcasting?: Spellcasting[];
    action?: ActionElement[];
    environment: Environment[];
    treasure?: Treasure[];
    actionTags?: ActionTag[];
    languageTags?: LanguageTag[];
    damageTags?: DamageTag[];
    damageTagsSpell?: DamageTag[];
    spellcastingTags?: SpellcastingTag[];
    miscTags?: MiscTag[];
    savingThrowForcedSpell?: SavingThrowForced[];
    hasToken: boolean;
    hasFluff: boolean;
    hasFluffImages: boolean;
    initiative?: Initiative;
    senses?: string[];
    senseTags?: SenseTag[];
    conditionInflict?: ConditionI[];
    savingThrowForced?: SavingThrowForced[];
    srd52?: boolean;
    basicRules2024?: boolean;
    trait?: ActionElement[];
    legendaryActionsLair?: number;
    legendary?: LegendaryElement[];
    legendaryGroup?: LegendaryGroup;
    soundClip?: SoundClip;
    traitTags?: string[];
    savingThrowForcedLegendary?: SavingThrowForced[];
    immune?: Immune[];
    group?: string[];
    dragonAge?: DragonAge;
    conditionInflictSpell?: ConditionI[];
    conditionImmune?: Array<ConditionImmuneClass | ConditionI>;
    resist?: Array<ResistClass | Immune>;
    bonus?: Bonus[];
    altArt?: LegendaryGroup[];
    _versions?: Version[];
    otherSources?: OtherSource[];
    gear?: Array<GearClass | string>;
    vulnerable?: Array<VulnerableClass | Immune>;
    reaction?: LegendaryElement[];
    attachedItems?: string[];
}

export interface Version {
    name: string;
    source: VersionSource;
    _mod: Mod;
}

export interface Mod {
    trait: ModAction;
    action: ModAction;
}

export interface ModAction {
    mode: string;
    replace: string;
    items: LegendaryElement;
}

export interface LegendaryElement {
    name: string;
    entries: string[];
}

export type VersionSource = "XMM";

export interface ActionElement {
    name: string;
    entries: Array<PurpleEntry | string>;
}

export interface PurpleEntry {
    type: EntryType;
    style: Style;
    items: PurpleItem[];
}

export interface PurpleItem {
    type: ItemType;
    name: string;
    entries?: string[];
    entry?: string;
}

export type ItemType = "item";

export type Style = "list-hang-notitle";

export type EntryType = "list";

export type ActionTag =
    | "Multiattack"
    | "Tentacles"
    | "Breath Weapon"
    | "Teleport"
    | "Parry"
    | "Swallow";

export type Alignment = "N" | "E" | "L" | "C" | "G" | "U" | "A" | "X";

export interface LegendaryGroup {
    name: string;
    source: VersionSource;
}

export interface Bonus {
    name: string;
    entries: Array<FluffyEntry | string>;
}

export interface FluffyEntry {
    type: EntryType;
    style: Style;
    items: FluffyItem[];
}

export interface FluffyItem {
    type: ItemType;
    name: string;
    entry: string;
}

export interface ConditionImmuneClass {
    conditionImmune: ConditionI[];
    note: string;
    cond: boolean;
}

export type ConditionI =
    | "poisoned"
    | "exhaustion"
    | "grappled"
    | "paralyzed"
    | "petrified"
    | "prone"
    | "restrained"
    | "unconscious"
    | "charmed"
    | "frightened"
    | "stunned"
    | "deafened"
    | "incapacitated"
    | "blinded"
    | "invisible";

export interface CRClass {
    cr: string;
    xpLair?: number;
    xp?: number;
}

export type DamageTag =
    | "B"
    | "L"
    | "P"
    | "S"
    | "T"
    | "Y"
    | "A"
    | "C"
    | "I"
    | "F"
    | "O"
    | "R"
    | "N";

export type DragonAge = "adult" | "ancient" | "wyrmling" | "young";

export type Environment =
    | "mountain"
    | "planar, air"
    | "any"
    | "underdark"
    | "underwater"
    | "arctic"
    | "swamp"
    | "coastal"
    | "desert"
    | "hill"
    | "forest"
    | "grassland"
    | "urban"
    | "planar, beastlands"
    | "planar, lower"
    | "planar, fire"
    | "planar, abyss"
    | "planar, nine hells"
    | "planar, shadowfell"
    | "planar, feywild"
    | "planar, limbo"
    | "planar, earth"
    | "planar, upper"
    | "planar, elemental"
    | "planar, elemental chaos"
    | "planar, astral"
    | "planar, acheron"
    | "planar, water"
    | "planar, gehenna"
    | "planar, mechanus"
    | "planar, ethereal";

export interface GearClass {
    item: string;
    quantity: number;
}

export interface HP {
    average: number;
    formula: string;
}

export type Immune =
    | "cold"
    | "acid"
    | "lightning"
    | "fire"
    | "poison"
    | "thunder"
    | "psychic"
    | "necrotic"
    | "slashing"
    | "radiant"
    | "bludgeoning"
    | "piercing";

export interface Initiative {
    proficiency: number;
}

export type LanguageTag =
    | "AU"
    | "OTH"
    | "P"
    | "C"
    | "DS"
    | "TP"
    | "DR"
    | "XX"
    | "X"
    | "TC"
    | "IG"
    | "AB"
    | "E"
    | "I"
    | "U"
    | "CS"
    | "S"
    | "GO"
    | "DU"
    | "GI"
    | "CE"
    | "T"
    | "AQ"
    | "GTH";

export type MiscTag =
    | "MA"
    | "RA"
    | "MLW"
    | "THW"
    | "RCH"
    | "CUR"
    | "AOE"
    | "RNG";

export interface OtherSource {
    source: OtherSourceSource;
    page?: number;
}

export type OtherSourceSource = "XPHB" | "ScoEE" | "UtHftLH" | "HBTD";

export interface ResistClass {
    special: string;
}

export interface Save {
    dex?: string;
    wis?: string;
    int?: string;
    con?: string;
    str?: string;
    cha?: string;
}

export type SavingThrowForced =
    | "wisdom"
    | "constitution"
    | "intelligence"
    | "dexterity"
    | "strength"
    | "charisma";

export type SenseTag = "D" | "SD" | "B" | "U" | "T";

export type Size = "M" | "S" | "L" | "H" | "G" | "T";

export interface Skill {
    arcana?: string;
    nature?: Acrobatics;
    perception?: string;
    religion?: string;
    history?: string;
    stealth?: Acrobatics;
    persuasion?: string;
    insight?: Acrobatics;
    deception?: string;
    acrobatics?: Acrobatics;
    athletics?: string;
    medicine?: Acrobatics;
    survival?: Acrobatics;
    performance?: Acrobatics;
    "sleight of hand"?: Acrobatics;
    investigation?: Acrobatics;
}

export type Acrobatics =
    | "+8"
    | "+7"
    | "+5"
    | "+6"
    | "+9"
    | "+13"
    | "+10"
    | "+4"
    | "+2"
    | "+3"
    | "+14"
    | "+1"
    | "+4 (+6 while in snake form)";

export interface SoundClip {
    type: SoundClipType;
    path: string;
}

export type SoundClipType = "internal";

export interface Speed {
    walk: ClimbElement | number;
    fly?: ClimbElement | number;
    swim?: number;
    climb?: ClimbElement | number;
    burrow?: number;
    canHover?: boolean;
    choose?: Choose;
    alternate?: Alternate;
}

export interface Alternate {
    walk: ClimbElement[];
}

export interface ClimbElement {
    number: number;
    condition: Condition;
}

export type Condition =
    | "(bear form only)"
    | "(boar form only)"
    | "(tiger form only)"
    | "(wolf form only)"
    | "(snake form only)"
    | "(hover)"
    | "(30 ft. when rolling, 60 ft. rolling downhill)";

export interface Choose {
    from: string[];
    amount: number;
    note: string;
}

export interface Spellcasting {
    name: string;
    type: SpellcastingType;
    headerEntries: string[];
    will?: string[];
    daily?: Daily;
    ability: Ability;
    displayAs?: DisplayAs;
    hidden?: Hidden[];
    legendary?: RESTLongClass;
    restLong?: RESTLongClass;
    recharge?: { [key: string]: string[] };
}

export type Ability = "wis" | "cha" | "int" | "con";

export interface Daily {
    "1"?: string[];
    "2"?: string[];
    "1e"?: string[];
    "2e"?: string[];
    "3"?: string[];
}

export type DisplayAs = "action" | "reaction" | "legendary" | "bonus";

export type Hidden = "daily" | "legendary" | "will" | "restLong" | "recharge";

export interface RESTLongClass {
    "1": string[];
}

export type SpellcastingType = "spellcasting";

export type SpellcastingTag = "O" | "CD" | "F";

export type Treasure =
    | "implements"
    | "individual"
    | "relics"
    | "any"
    | "arcana"
    | "armaments";

export interface PurpleType {
    type: FluffyType | TypeElement;
    tags?: string[];
    note?: Note;
    swarmSize?: Size;
}

export type Note = "(Wizard)" | "(Cleric)" | "(Lycanthrope)";

export interface FluffyType {
    choose: TypeElement[];
}

export type TypeElement =
    | "elemental"
    | "humanoid"
    | "aberration"
    | "monstrosity"
    | "celestial"
    | "construct"
    | "beast"
    | "fey"
    | "plant"
    | "undead"
    | "ooze"
    | "fiend"
    | "giant"
    | "dragon";

export interface VulnerableClass {
    vulnerable: Immune[];
    note: string;
    cond: boolean;
}
