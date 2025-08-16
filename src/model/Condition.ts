interface Conditions {
    conditions: Array<{
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
        conditions.statuses.map((status) => [
            status.name,
            status.effects?.join(" ") ?? "",
        ])
    );

export const conditionMapping = new Map<string, string>(
    allConditions.map(([name, effects]) => [name, effects])
);
