import { useEffect, useState } from "react";
import { Combatant } from "./Combatant";
import { SaveData, store } from './store'
import { StatBlock } from "./StatBlock";

function roll20(): number {
  return Math.floor(Math.random() * 20) + 1;
}

export interface InitiativeTrackerViewModel {
  selected: number;
  sort: () => void;
  getSelectedCombatant: () => Combatant;
  setCombatants: (combatants: Map<string, Combatant>, selected?: number) => void;
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
}

export interface BestiaryViewModel {
  bestiary: { [monsterId: string]: StatBlock };
  addMonster: (monster: StatBlock) => void;
  removeMonster: (monsterId: string) => void;
  updateMonster: (monsterId: string, updatedData: Partial<StatBlock>) => void;
  importMonsters: (monsters: { [monsterId: string]: StatBlock }) => void;
  save: () => void
}

export interface ConfigViewModel {
  apiKey?: string;
  setApiKey: (apiKey: string) => void;
}

export function useViewModel(initialData: SaveData): InitiativeTrackerViewModel & BestiaryViewModel & ConfigViewModel {
  const tracker = initialData.tracker || { combatants: [], selected: 0 };
  const [bestiary, setBestiary] = useState<{ [monsterId: string]: StatBlock }>({ ...initialData.bestiary });
  const [combatants, setCombatantz] = useState<Map<string, Combatant>>(new Map(tracker.combatants));
  const [selected, setSelected] = useState(tracker.selected);
  const [apiKey, setApiKey] = useState<string | undefined>(initialData.apiKey);

  useEffect(() => {
    save();
  }, [bestiary, apiKey, combatants, selected]);

  const save = () => {
    store.update({
      bestiary,
      tracker: {
        combatants: Array.from(combatants.entries()),
        selected
      }
    })
      .then(() => {
        console.log('Save successful')
      })
      .catch((error) => console.error('Error saving:', error));
  }

  const duplicateCombatant = (id: string) => {
    const combatant = combatants.get(id);

    if (!combatant) {
      console.warn(`Combatant with id ${id} not found`);
      return;
    }

    const newId = crypto.randomUUID().toString();
    const newCombatant = { ...combatant, id: newId, discriminator: undefined }; // Reset discriminator for new combatant
    setCombatants(new Map(combatants.set(newId, newCombatant)));
  }

  const addMonster = (monster: StatBlock) => {
    const monsterId = crypto.randomUUID().toString();
    setBestiary(prev => ({ ...prev, [monster.name]: { ...monster, id: monsterId } }));
  }

  const removeMonster = (monsterId: string) => {
    setBestiary(prev => {
      const { [monsterId]: _, ...rest } = prev;
      return rest;
    });
  }

  const updateMonster = (monsterId: string, updatedData: Partial<StatBlock>) => {
    setBestiary(prev => {
      const existingMonster = prev[monsterId];
      if (!existingMonster) {
        console.warn(`Monster with id ${monsterId} not found`);
        return prev;
      }
      return {
        ...prev,
        [monsterId]: { ...existingMonster, ...updatedData }
      };
    });
  }

  const importMonsters = (monsters: { [monsterId: string]: StatBlock }) => {
    const newMonsters = Object.entries(monsters).reduce((acc, [id, monster]) => {
      acc[monster.name] = { ...monster, id };
      return acc;
    }, {} as { [monsterId: string]: StatBlock });

    setBestiary(prev => ({ ...prev, ...newMonsters }));
  }

  const sort = () => {
    const toInsert = Array.from(combatants.entries()).sort((a, b) => b[1].initiative - a[1].initiative);
    setCombatantz(new Map(toInsert))
  }

  const setCombatants = (updatedCombatants: Map<string, Combatant>) => {
    const toInsert = Array.from(updatedCombatants.entries());
    setCombatantz(new Map(toInsert))
  }

  const addCombatant = (monster: Combatant, quantity: number) => {
    const multi = quantity > 1;
    const newCombatants = new Map(combatants);

    for (let i = 1; i <= quantity; i++) {
      const id = crypto.randomUUID().toString();
      const renamed = Object.assign({ id }, monster, { discriminator: (multi ? i : undefined) });
      newCombatants.set(id, renamed);
    }

    setCombatants(newCombatants);
  };

  const next = () => {
    const newSelection = selected === combatants.size - 1 ? 0 : selected + 1;

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

    setCombatants(new Map(combatants.set(id, { ...combatant, conditions })))
  };

  const incOrDecHp = (id: string, hp: number) => {
    const combatant = getCombatantById(id)!;
    setCombatants(new Map(combatants.set(id, { ...combatant, hp: combatant.hp + hp })))
  }

  const incOrDecAc = (id: string, ac: number) => {
    const combatant = getCombatantById(id)!;
    setCombatants(new Map(combatants.set(id, { ...combatant, ac: combatant.ac + ac })))
  }

  const setInitiative = (id: string, initiative: number) => {
    const combatant = getCombatantById(id)!;
    const initiativeBonus = combatant.statBlock?.initiativeBonus || 0;
    setCombatants(new Map(combatants.set(id, { ...combatant, initiative: initiative + initiativeBonus })))
  }

  const rollInitiative = (id: string) => {
    const initiative = roll20();
    setInitiative(id, initiative)
  }

  const rollAllInitiative = () => {
    const all: [string, Combatant][] = allCombatants().map(([key, combatant]) => {
      return [key, { ...combatant, initiative: roll20() + (combatant.statBlock?.initiativeBonus || 0) }]
    })

    setCombatants(new Map(all.sort((a, b) => b[1].initiative - a[1].initiative)));
  }

  const updateCombatant = (id: string, combatant: Partial<Combatant>) => {
    const existingCombatant = getCombatantById(id);
    if (!existingCombatant) {
      console.warn(`Combatant with id ${id} not found`);
      return;
    }
    const updatedCombatant = { ...existingCombatant, ...combatant };
    setCombatants(new Map(combatants.set(id, updatedCombatant)));
  }

  const hasCondition = (id: string, condition: string) => {
    const combatant = getCombatantById(id);
    if (!combatant) {
      return false;
    }
    console.log(`Checking condition ${condition} for combatant ${id} ${combatant.conditions}`);

    return combatant.conditions.includes(condition);
  }

  const deleteCombatant = (id: string) => {
    combatants.delete(id);
    setCombatants(new Map(combatants))
  }

  const getSelectedCombatant = () => Array.from(combatants.values())[selected];

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
    importMonsters,
    bestiary,
    save,
    apiKey,
    setApiKey
  }
}