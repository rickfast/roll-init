export type SpellLevel =
    | "Cantrip"
    | "1st"
    | "2nd"
    | "3rd"
    | "4th"
    | "5th"
    | "6th"
    | "7th"
    | "8th"
    | "9th";

export type SpellSchool =
    | "Abjuration"
    | "Conjuration"
    | "Divination"
    | "Enchantment"
    | "Evocation"
    | "Illusion"
    | "Necromancy"
    | "Transmutation";

export type CastingTimeType =
    | "action"
    | "bonus action"
    | "reaction"
    | "minute"
    | "hour";

export type CastingTime = {
    type: CastingTimeType;
    duration: number;
};

export type RangeType =
    | "Self"
    | "Touch"
    | "Feet"
    | "Miles"
    | "Sight"
    | "Unlimited";

export type SpellRange = {
    type: RangeType;
    distance?: number;
};

export type CharacterClass =
    | "Artificer"
    | "Bard"
    | "Cleric"
    | "Druid"
    | "Paladin"
    | "Ranger"
    | "Sorcerer"
    | "Warlock"
    | "Wizard";

export interface Entry {
    title?: string;
    text: string;
}

export interface Spell {
    name: string;
    level: SpellLevel;
    school: SpellSchool;
    castingTime: CastingTime;
    range: SpellRange;
    components: {
        verbal: boolean;
        somatic: boolean;
        material: boolean;
        materialComponents?: string;
    };
    duration: string;
    concentration: boolean;
    ritual: boolean;
    description: Entry[];
    higherLevel?: string;
    classes: CharacterClass[];
}
