import { useEffect, useState } from "react";
import { Combatant } from "./Combatant";
import { SaveData, store } from "./store";
import { StatBlock } from "./StatBlock";
import { Spell } from "./Spell";

function roll20(): number {
    return Math.floor(Math.random() * 20) + 1;
}

const audio = new Audio("public/dice.mp3");

function playDiceSound() {
    audio.currentTime = 0;
    audio.play();
}

export interface ViewModel {
    selected: number;
    sort: () => void;
    getSelectedCombatant: () => Combatant;
    setCombatants: (
        combatants: Map<string, Combatant>,
        selected?: number
    ) => void;
    allCombatants: () => [string, Combatant][];
    addCombatant: (monster: Combatant, quantity: number) => void;
    next: () => void;
    incOrDecHp: (id: string, hp: number) => void;
    incOrDecAc: (id: string, ac: number) => void;
    toggleCondition: (id: string, condition: string) => void;
    setInitiative: (id: string, initiative: number) => void;
    rollInitiative: (id: string) => void;
    rollAllInitiative: () => void;
    hasCondition: (id: string, condition: string) => boolean;
    deleteCombatant: (id: string) => void;
    updateCombatant: (id: string, combatant: Partial<Combatant>) => void;
    duplicateCombatant: (id: string) => void;
    bestiary: { [monsterId: string]: StatBlock };
    addMonster: (monster: StatBlock) => void;
    removeMonster: (monsterId: string) => void;
    updateMonster: (monsterId: string, updatedData: Partial<StatBlock>) => void;
    spells: { [name: string]: Spell };
    importMonsters: (monsters: { [monsterId: string]: StatBlock }) => void;
    importSpells: (monsters: { [spellId: string]: Spell }) => void;
    save: () => void;
    apiKey?: string;
    setApiKey: (apiKey: string) => void;
    saving: boolean;
    notifications: Set<string>;
    pushNotification: (notification: string) => void;
    searchable: Map<string, SearchData>;
    longRest: () => void;
}

export type Type = "monster" | "spell";

export interface SearchData {
    type: Type;
    value: string;
    href: string;
}

export function useViewModel(initialData: SaveData): ViewModel {
    const tracker = initialData.tracker || { combatants: [], selected: 0 };
    const [bestiary, setBestiary] = useState<{
        [monsterId: string]: StatBlock;
    }>({
        ...initialData.bestiary,
    });
    const [spells, setSpells] = useState<{ [name: string]: Spell }>({
        ...initialData.spells,
    });
    const [combatants, setCombatantz] = useState<Map<string, Combatant>>(
        new Map(tracker.combatants)
    );
    const [selected, setSelected] = useState(tracker.selected);
    const [apiKey, setApiKey] = useState<string | undefined>(
        initialData.apiKey
    );
    const [notifications, setNotifications] = useState(new Set<string>());
    const [saving, setSaving] = useState(false);

    const [searchable, setSearchable] = useState<Map<string, SearchData>>(
        createSearchData(initialData.bestiary, {})
    );

    function createSearchData(
        bestiary: { [monsterId: string]: StatBlock },
        spells: { [spellId: string]: Spell }
    ) {
        const monsters: [string, SearchData][] = Object.values(bestiary).map(
            (monster) => {
                return [
                    monster.name,
                    {
                        type: "monster",
                        value: monster.name,
                        href: `/bestiary?id=${monster.name}`,
                    },
                ];
            }
        );
        const searchableSpells: [string, SearchData][] = Object.values(
            spells
        ).map((spell) => {
            return [
                spell.name,
                {
                    type: "spell",
                    value: spell.name,
                    href: `/spells?id=${spell.name}`,
                },
            ];
        });

        return new Map([...monsters, ...searchableSpells]);
    }

    useEffect(() => {
        save();
        setSearchable(createSearchData(bestiary, spells));
    }, [bestiary, apiKey, combatants, spells]);

    const pushNotification = (notification: string) => {
        if (!notifications.has(notification)) {
            notifications.add(notification);
            setNotifications(notifications);
        }
    };

    const save = () => {
        setSaving(true);
        store
            .update({
                bestiary,
                tracker: {
                    combatants: Array.from(combatants.entries()),
                    selected,
                },
                apiKey,
                spells,
            })
            .then(() => {
                setTimeout(() => setSaving(false), 2000);
            })
            .catch((error) => {
                setSaving(false);
                pushNotification(`An error occurred while saving: ${error}`);
            });
    };

    const duplicateCombatant = (id: string) => {
        const combatant = combatants.get(id);

        if (!combatant) {
            console.warn(`Combatant with id ${id} not found`);
            return;
        }

        const newId = crypto.randomUUID().toString();
        const newCombatant = {
            ...combatant,
            id: newId,
            discriminator: undefined,
        }; // Reset discriminator for new combatant
        setCombatants(new Map(combatants.set(newId, newCombatant)));
    };

    const addMonster = (monster: StatBlock) => {
        const monsterId = crypto.randomUUID().toString();
        setBestiary((prev) => ({
            ...prev,
            [monster.name]: { ...monster, id: monsterId },
        }));
    };

    const removeMonster = (monsterId: string) => {
        setBestiary((prev) => {
            const { [monsterId]: _, ...rest } = prev;
            return rest;
        });
    };

    const updateMonster = (
        monsterId: string,
        updatedData: Partial<StatBlock>
    ) => {
        setBestiary((prev) => {
            const existingMonster = prev[monsterId];
            if (!existingMonster) {
                console.warn(`Monster with id ${monsterId} not found`);
                return prev;
            }
            return {
                ...prev,
                [monsterId]: { ...existingMonster, ...updatedData },
            };
        });
    };

    const importMonsters = (monsters: { [monsterId: string]: StatBlock }) => {
        const newMonsters = Object.entries(monsters).reduce(
            (acc, [id, monster]) => {
                acc[monster.name] = { ...monster, id };
                return acc;
            },
            {} as { [monsterId: string]: StatBlock }
        );

        setBestiary((prev) => ({ ...prev, ...newMonsters }));
    };

    const importSpells = (spells: { [spellId: string]: Spell }) => {
        const newSpells = Object.entries(spells).reduce(
            (acc, [name, spell]) => {
                acc[spell.name] = { ...spell, name };
                return acc;
            },
            {} as { [spellId: string]: Spell }
        );

        setSpells((prev) => ({ ...prev, ...newSpells }));
    };

    const sort = () => {
        const toInsert = Array.from(combatants.entries()).sort(
            (a, b) => b[1].initiative - a[1].initiative
        );
        setCombatantz(new Map(toInsert));
    };

    const setCombatants = (updatedCombatants: Map<string, Combatant>) => {
        const toInsert = Array.from(updatedCombatants.entries());
        setCombatantz(new Map(toInsert));
    };

    const addCombatant = (monster: Combatant, quantity: number) => {
        const multi = quantity > 1;
        const newCombatants = new Map(combatants);

        for (let i = 1; i <= quantity; i++) {
            const id = crypto.randomUUID().toString();
            const renamed = Object.assign({ id }, monster, {
                discriminator: multi ? { type: "number", value: i } : undefined,
            });
            newCombatants.set(id, renamed);
        }

        setCombatants(newCombatants);
    };

    const next = () => {
        const newSelection =
            selected === combatants.size - 1 ? 0 : selected + 1;

        if (newSelection > combatants.size) {
            setSelected(combatants.size - 1);
        } else {
            setSelected(newSelection);
        }
    };

    const allCombatants = () => Array.from(combatants.entries());

    const getCombatantById = (id: string) => combatants.get(id);

    const toggleCondition = (id: string, condition: string) => {
        const combatant = getCombatantById(id)!;
        const conditions = combatant.conditions;

        if (conditions.includes(condition)) {
            conditions.splice(conditions.indexOf(condition), 1);
        } else {
            conditions.push(condition);
        }

        setCombatants(
            new Map(combatants.set(id, { ...combatant, conditions }))
        );
    };

    const incOrDecHp = (id: string, hp: number) => {
        const combatant = getCombatantById(id)!;
        setCombatants(
            new Map(combatants.set(id, { ...combatant, hp: combatant.hp + hp }))
        );
    };

    const incOrDecAc = (id: string, ac: number) => {
        const combatant = getCombatantById(id)!;
        setCombatants(
            new Map(combatants.set(id, { ...combatant, ac: combatant.ac + ac }))
        );
    };

    const setInitiative = (id: string, initiative: number) => {
        const combatant = getCombatantById(id)!;
        const initiativeBonus = combatant.statBlock?.initiativeBonus || 0;
        setCombatants(
            new Map(
                combatants.set(id, {
                    ...combatant,
                    initiative: initiative + initiativeBonus,
                })
            )
        );
    };

    const rollInitiative = (id: string) => {
        const combatant = getCombatantById(id);
        const initiative = roll20() + (combatant?.initiativeBonus || 0);
        setInitiative(id, initiative);

        playDiceSound();
    };

    const rollAllInitiative = () => {
        playDiceSound();

        const all: [string, Combatant][] = allCombatants().map(
            ([key, combatant]) => {
                const initiative = roll20() + (combatant.initiativeBonus || 0);
                return [key, { ...combatant, initiative }];
            }
        );

        setCombatants(
            new Map(all.sort((a, b) => b[1].initiative - a[1].initiative))
        );
    };

    const updateCombatant = (id: string, combatant: Partial<Combatant>) => {
        const existingCombatant = getCombatantById(id);
        if (!existingCombatant) {
            console.warn(`Combatant with id ${id} not found`);
            return;
        }
        const updatedCombatant = { ...existingCombatant, ...combatant };
        setCombatants(new Map(combatants.set(id, updatedCombatant)));
    };

    const hasCondition = (id: string, condition: string) => {
        const combatant = getCombatantById(id);
        if (!combatant) {
            return false;
        }
        console.log(
            `Checking condition ${condition} for combatant ${id} ${combatant.conditions}`
        );

        return combatant.conditions.includes(condition);
    };

    const deleteCombatant = (id: string) => {
        combatants.delete(id);
        setCombatants(new Map(combatants));
    };

    const getSelectedCombatant = () =>
        Array.from(combatants.values())[selected];

    const longRest = () => {
        const all: [string, Combatant][] = allCombatants().map(
            ([key, combatant]) => {
                const hp = combatant.locked ? combatant.max : combatant.hp;

                return [key, { ...combatant, hp, conditions: [] }];
            }
        );

        setCombatants(new Map(all));
    };

    return {
        selected,
        sort,
        getSelectedCombatant,
        setCombatants,
        allCombatants,
        addCombatant,
        next,
        incOrDecHp,
        incOrDecAc,
        toggleCondition,
        setInitiative,
        rollInitiative,
        rollAllInitiative,
        updateCombatant,
        hasCondition,
        deleteCombatant,
        duplicateCombatant,
        addMonster,
        removeMonster,
        updateMonster,
        spells,
        importMonsters,
        importSpells,
        bestiary,
        save,
        apiKey,
        setApiKey,
        saving,
        notifications,
        pushNotification,
        searchable,
        longRest,
    };
}
