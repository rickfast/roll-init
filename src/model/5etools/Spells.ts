export interface Spells {
    spell: Spell[];
}

export interface Spell {
    name: string;
    source: SpellSource;
    page: number;
    srd?: boolean | string;
    basicRules?: boolean;
    reprintedAs: string[];
    level: number;
    school: School;
    time: Time[];
    range: Range;
    components: Components;
    duration: DurationElement[];
    entries: Array<PurpleEntry | string>;
    scalingLevelDice?: ScalingLevelDice;
    damageInflict?: string[];
    savingThrow?: AbilityCheck[];
    miscTags?: string[];
    areaTags?: AreaTag[];
    otherSources?: OtherSource[];
    entriesHigherLevel?: EntriesHigherLevel[];
    meta?: Meta;
    conditionInflict?: string[];
    affectsCreatureType?: AffectsCreatureType[];
    damageResist?: string[];
    hasFluffImages?: boolean;
    spellAttack?: SpellAttack[];
    abilityCheck?: AbilityCheck[];
    alias?: string[];
    conditionImmune?: string[];
    damageVulnerable?: string[];
    damageImmune?: string[];
}

export type AbilityCheck =
    | "strength"
    | "intelligence"
    | "dexterity"
    | "wisdom"
    | "charisma"
    | "constitution";

export type AffectsCreatureType =
    | "beast"
    | "humanoid"
    | "aberration"
    | "celestial"
    | "dragon"
    | "elemental"
    | "fey"
    | "fiend"
    | "giant"
    | "monstrosity"
    | "ooze"
    | "plant"
    | "construct"
    | "undead";

export type AreaTag =
    | "MT"
    | "ST"
    | "C"
    | "S"
    | "W"
    | "N"
    | "Y"
    | "R"
    | "Q"
    | "L"
    | "H";

export interface Components {
    v?: boolean;
    s?: boolean;
    m?: MClass | string;
}

export interface MClass {
    text: string;
    cost?: number;
    consume?: boolean | string;
}

export interface DurationElement {
    type: FluffyType;
    duration?: DurationDuration;
    concentration?: boolean;
    ends?: End[];
}

export interface DurationDuration {
    type: PurpleType;
    amount: number;
    upTo?: boolean;
}

export type PurpleType = "hour" | "minute" | "day" | "round";

export type End = "dispel" | "trigger";

export type FluffyType = "instant" | "timed" | "permanent" | "special";

export interface PurpleEntry {
    type: EntryType;
    name?: string;
    entries?: Array<FluffyEntry | string>;
    caption?: string;
    colLabels?: string[];
    colStyles?: string[];
    rows?: Array<Array<RowClass | string>>;
    items?: string[];
}

export interface FluffyEntry {
    type: EntryType;
    items: string[];
}

export type EntryType = "entries" | "table" | "list";

export interface RowClass {
    type: RowType;
    roll: Roll;
}

export interface Roll {
    exact?: number;
    min?: number;
    max?: number;
    pad?: boolean;
}

export type RowType = "cell";

export interface EntriesHigherLevel {
    type: EntryType;
    name: Name;
    entries: string[];
}

export type Name = "At Higher Levels";

export interface Meta {
    ritual: boolean;
}

export interface OtherSource {
    source: OtherSourceSource;
    page: number;
}

export type OtherSourceSource = "RMR";

export interface Range {
    type: RangeType;
    distance?: Distance;
}

export interface Distance {
    type: DistanceType;
    amount?: number;
}

export type DistanceType =
    | "feet"
    | "self"
    | "touch"
    | "miles"
    | "sight"
    | "unlimited";

export type RangeType =
    | "point"
    | "radius"
    | "sphere"
    | "cone"
    | "special"
    | "line"
    | "hemisphere"
    | "cube";

export interface ScalingLevelDice {
    label: string;
    scaling: { [key: string]: string };
}

export type School = "C" | "A" | "T" | "E" | "N" | "D" | "V" | "I";

export type SpellSource = "PHB";

export type SpellAttack = "M" | "R";

export interface Time {
    number: number;
    unit: Unit;
    condition?: string;
}

export type Unit = "action" | "minute" | "hour" | "bonus" | "reaction";
