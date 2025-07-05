export const SCHEMA = {
    name: "StatBlock",
    description: "Create a D&D 5e stat block for a creature or character.",
    type: "object",
    strict: false,
    additionalProperties: false,
    required: [
        "name",
        "size",
        "type",
        "alignment",
        "armorClass",
        "hitPoints",
        "abilityScores",
        "actions",
        "traits",
        "speed",
        "challengeRating",
        "savingThrows",
        "damageVulnerabilities",
        "damageResistances",
        "damageImmunities",
        "conditionImmunities",
        "senses",
        "languages",
    ],
    properties: {
        name: { type: "string" },
        size: {
            type: "string",
            enum: ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"],
            additionalProperties: false,
        },
        type: { type: "string" },
        alignment: { type: "string" },

        armorClass: { type: "number" },
        hitPoints: {
            type: "object",
            required: ["value", "hitDice"],
            description:
                "An object representing the hit points of the creature, with a value and hit dice.",
            properties: {
                value: { type: "number" },
                hitDice: {
                    type: "string",
                    description: "The hit dice of the creature, e.g. '3d8+2'.",
                },
            },
            additionalProperties: false,
        },

        speed: {
            type: "array",
            items: {
                type: "object",
                required: ["type", "speed"],
                description:
                    "An object representing the speed of the creature, with a type (e.g. walk or fly) and speed value.",
                properties: {
                    type: { type: "string" },
                    speed: { type: "string" },
                },
                additionalProperties: false,
            },
        },

        abilityScores: {
            type: "object",
            required: ["str", "dex", "con", "int", "wis", "cha"],
            properties: {
                str: { type: "number" },
                dex: { type: "number" },
                con: { type: "number" },
                int: { type: "number" },
                wis: { type: "number" },
                cha: { type: "number" },
            },
            additionalProperties: false,
        },

        savingThrows: {
            type: "object",
            required: ["str", "dex", "con", "int", "wis", "cha"],
            description:
                "Saving throws for the creature, with values indicating the bonus to the saving throw.",
            properties: {
                str: { type: "number" },
                dex: { type: "number" },
                con: { type: "number" },
                int: { type: "number" },
                wis: { type: "number" },
                cha: { type: "number" },
            },
            additionalProperties: false,
        },

        damageVulnerabilities: {
            type: "array",
            items: {
                type: "string",
                enum: [
                    "acid",
                    "bludgeoning",
                    "cold",
                    "fire",
                    "force",
                    "lightning",
                    "necrotic",
                    "piercing",
                    "poison",
                    "psychic",
                    "radiant",
                    "slashing",
                    "thunder",
                ],
            },
        },
        damageResistances: {
            type: "array",
            items: {
                type: "string",
                enum: [
                    "acid",
                    "bludgeoning",
                    "cold",
                    "fire",
                    "force",
                    "lightning",
                    "necrotic",
                    "piercing",
                    "poison",
                    "psychic",
                    "radiant",
                    "slashing",
                    "thunder",
                ],
            },
        },
        damageImmunities: {
            type: "array",
            items: {
                type: "string",
                enum: [
                    "acid",
                    "bludgeoning",
                    "cold",
                    "fire",
                    "force",
                    "lightning",
                    "necrotic",
                    "piercing",
                    "poison",
                    "psychic",
                    "radiant",
                    "slashing",
                    "thunder",
                ],
            },
        },
        conditionImmunities: {
            type: "array",
            items: { type: "string" },
        },

        senses: { type: "string" },
        languages: {
            type: "array",
            items: {
                type: "string",
                enum: [
                    "Common",
                    "Dwarvish",
                    "Elvish",
                    "Giant",
                    "Gnomish",
                    "Goblin",
                    "Halfling",
                    "Orc",
                    "Abyssal",
                    "Celestial",
                    "Draconic",
                    "Deep Speech",
                    "Infernal",
                    "Primordial",
                    "Sylvan",
                    "Undercommon",
                    "Aquan",
                    "Auran",
                    "Ignan",
                    "Terran",
                    "Telepathy",
                    "Thieves’ Cant",
                    "Druidic",
                    "Any",
                ],
            },
        },

        challengeRating: { type: "number" },

        traits: {
            type: "array",
            items: {
                type: "object",
                required: ["name", "desc"],
                properties: {
                    name: { type: "string" },
                    desc: { type: "string" },
                },
                additionalProperties: false,
            },
        },
        actions: {
            type: "array",
            items: {
                type: "object",
                required: ["name", "desc"],
                description:
                    "Actions that the creature can take, such as attacks or special abilities.",
                properties: {
                    name: { type: "string" },
                    desc: { type: "string" },
                },
                additionalProperties: false,
            },
        },
    },
    //   }
};
