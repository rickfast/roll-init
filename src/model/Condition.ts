interface Conditions {
    conditions: Array<{
        name: string;
        effects: string[];
    }>;
    statusEffects: Array<{
        name: string;
        effects: string[];
    }>;
    statuses: Array<{
        name: string;
        effects?: string[];
    }>;
}

const conditions: Conditions = {
    conditions: [
        {
            name: "Blinded",
            effects: [
                "A blinded creature can't see and automatically fails any ability check that requires sight.",
                "Attack rolls against the creature have advantage.",
                "The creature's attack rolls have disadvantage.",
            ],
        },
        {
            name: "Charmed",
            effects: [
                "A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.",
                "The charmer has advantage on any ability check to interact socially with the creature.",
            ],
        },
        {
            name: "Deafened",
            effects: [
                "A deafened creature can't hear and automatically fails any ability check that requires hearing.",
            ],
        },
        {
            name: "Frightened",
            effects: [
                "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.",
                "The creature can't willingly move closer to the source of its fear.",
            ],
        },
        {
            name: "Grappled",
            effects: [
                "A grappled creature's speed becomes 0, and it can't benefit from bonuses to speed.",
                "The condition ends if the grappler is incapacitated.",
                "The condition also ends if the creature is removed from the reach of the grappler.",
            ],
        },
        {
            name: "Incapacitated",
            effects: [
                "An incapacitated creature can't take actions or reactions.",
            ],
        },
        {
            name: "Invisible",
            effects: [
                "An invisible creature is impossible to see without the aid of magic or a special sense.",
                "For the purpose of hiding, the creature is heavily obscured.",
                "The creature's location can still be detected by noise or tracks.",
                "Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage.",
            ],
        },
        {
            name: "Paralyzed",
            effects: [
                "A paralyzed creature is incapacitated and can't move or speak.",
                "The creature automatically fails Strength and Dexterity saving throws.",
                "Attack rolls against the creature have advantage.",
                "Any attack that hits the creature is a critical hit if the attacker is within 5 feet.",
            ],
        },
        {
            name: "Petrified",
            effects: [
                "A petrified creature is transformed, along with any non-magical objects it's wearing or carrying, into a solid inanimate substance (usually stone).",
                "Its weight increases by a factor of ten, it ceases aging, and it's incapacitated, can't move or speak, and is unaware of its surroundings.",
                "Attack rolls against the creature have advantage.",
                "The creature automatically fails Strength and Dexterity saving throws.",
                "The creature has resistance to all damage.",
                "The creature is immune to poison and disease.",
            ],
        },
        {
            name: "Poisoned",
            effects: [
                "A poisoned creature has disadvantage on attack rolls and ability checks.",
            ],
        },
        {
            name: "Prone",
            effects: [
                "A prone creature's only movement option is to crawl, unless it stands up and ends the condition.",
                "The creature has disadvantage on attack rolls.",
                "Attack rolls against the creature have advantage if the attacker is within 5 feet. Otherwise, the attack roll has disadvantage.",
            ],
        },
        {
            name: "Restrained",
            effects: [
                "A restrained creature's speed becomes 0, and it can't benefit from any bonuses to speed.",
                "Attack rolls against the creature have advantage.",
                "The creature's attack rolls have disadvantage.",
                "The creature has disadvantage on Dexterity saving throws.",
            ],
        },
        {
            name: "Stunned",
            effects: [
                "A stunned creature is incapacitated, can't move, and can speak only falteringly.",
                "The creature automatically fails Strength and Dexterity saving throws.",
                "Attack rolls against the creature have advantage.",
            ],
        },
        {
            name: "Unconscious",
            effects: [
                "An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings.",
                "The creature drops whatever it's holding and falls prone.",
                "The creature automatically fails Strength and Dexterity saving throws.",
                "Attack rolls against the creature have advantage.",
                "Any attack that hits the creature is a critical hit if the attacker is within 5 feet.",
            ],
        },
    ],
    statusEffects: [
        {
            name: "Bless",
            effects: [
                "The creature adds 1d4 to each attack roll and saving throw it makes.",
                "Concentration, up to 1 minute.",
            ],
        },
        {
            name: "Bane",
            effects: [
                "The creature subtracts 1d4 from each attack roll and saving throw it makes.",
                "Concentration, up to 1 minute.",
            ],
        },
        {
            name: "Bardic Inspiration",
            effects: [
                "The creature has a Bardic Inspiration die it can add to one ability check, attack roll, or saving throw.",
                "It can wait until after it rolls the d20 before deciding to use the die, but must decide before the DM says whether the roll succeeds or fails.",
            ],
        },
        {
            name: "Guidance",
            effects: [
                "The creature can add 1d4 to one ability check of its choice before the spell ends.",
                "Concentration, up to 1 minute.",
            ],
        },
        {
            name: "Heroism",
            effects: [
                "The creature is immune to being Frightened.",
                "At the start of each of its turns, it gains temporary hit points equal to the caster's spellcasting ability modifier.",
                "Concentration, up to 1 minute.",
            ],
        },
        {
            name: "Hex",
            effects: [
                "The creature takes an extra 1d6 necrotic damage whenever the caster hits it with an attack.",
                "It has disadvantage on ability checks made with the ability chosen by the caster.",
                "Concentration, up to 1 hour.",
            ],
        },
        {
            name: "Hunter's Mark",
            effects: [
                "The creature takes an extra 1d6 damage whenever the caster hits it with a weapon attack.",
                "The caster has advantage on Wisdom (Perception) and Wisdom (Survival) checks to find it.",
                "Concentration, up to 1 hour.",
            ],
        },
        {
            name: "Hexblade's Curse",
            effects: [
                "The caster deals bonus damage to the cursed target equal to the caster's proficiency bonus.",
                "The caster scores a critical hit against the target on a roll of 19 or 20.",
                "If the target dies, the caster regains hit points.",
            ],
        },
        {
            name: "Faerie Fire",
            effects: [
                "The creature is outlined in light and sheds dim light; it can't benefit from being Invisible.",
                "Attack rolls against the creature have advantage.",
                "Concentration, up to 1 minute.",
            ],
        },
        {
            name: "Hasted",
            effects: [
                "The creature's speed is doubled and it gains a +2 bonus to AC.",
                "It has advantage on Dexterity saving throws.",
                "It gains an additional action used to Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object.",
                "When the spell ends, the creature can't move or take actions until after its next turn.",
                "Concentration, up to 1 minute.",
            ],
        },
        {
            name: "Slowed",
            effects: [
                "The creature's speed is halved and it takes a -2 penalty to AC and Dexterity saving throws.",
                "It can't take reactions.",
                "It can use either an action or a bonus action on its turn, not both, and can make only one melee or ranged attack on its turn.",
                "Concentration, up to 1 minute.",
            ],
        },
        {
            name: "Shield of Faith",
            effects: [
                "The creature has a +2 bonus to AC.",
                "Concentration, up to 10 minutes.",
            ],
        },
        {
            name: "Aid",
            effects: [
                "The creature's hit point maximum and current hit points are increased for the duration.",
            ],
        },
        {
            name: "Raging",
            effects: [
                "The creature has advantage on Strength checks and Strength saving throws.",
                "It deals bonus melee damage with Strength-based attacks.",
                "It has resistance to bludgeoning, piercing, and slashing damage.",
            ],
        },
    ],
    statuses: [
        {
            name: "Concentration",
            effects: [
                "While concentrating on a spell, casting another concentration spell ends the previous one.",
                "Taking damage requires a Constitution saving throw to maintain concentration (DC 10 or half damage, whichever is higher).",
            ],
        },
        {
            name: "Readied Action",
            effects: [
                "A creature prepares an action to be triggered by a specific condition.",
                "If the condition occurs before the start of their next turn, they may use their reaction to perform the action.",
            ],
        },
        {
            name: "Inspiration",
            effects: [
                "A creature can spend Inspiration to gain advantage on an ability check, attack roll, or saving throw.",
                "Only one Inspiration point can be held at a time.",
            ],
        },
    ],
};

const allConditions: Array<string[]> = conditions.conditions
    .map((condition) => [condition.name, condition.effects.join(" ")])
    .concat(
        conditions.statusEffects.map((status) => [
            status.name,
            status.effects.join(" "),
        ])
    )
    .concat(
        conditions.statuses.map((status) => [
            status.name,
            status.effects?.join(" ") ?? "",
        ])
    );

export const conditionMapping = new Map<string, string>(
    allConditions.map(([name, effects]) => [name, effects])
);

// Grouped options for the tracker's condition MultiSelect.
export const conditionOptions = [
    {
        group: "Conditions",
        items: conditions.conditions.map((condition) => condition.name),
    },
    {
        group: "Status Effects",
        items: conditions.statusEffects.map((status) => status.name),
    },
    {
        group: "Other",
        items: conditions.statuses.map((status) => status.name),
    },
];
