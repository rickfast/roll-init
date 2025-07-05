import {
    readTextFile,
    writeTextFile,
    BaseDirectory,
} from "@tauri-apps/plugin-fs";
import { StatBlock } from "../StatBlock";
import { Combatant } from "../Combatant";

export interface SaveData {
    bestiary: { [monsterId: string]: StatBlock };
    spells?: { [spellId: string]: any };
    tracker?: {
        combatants: [string, Combatant][];
        selected: number;
    };
    apiKey?: string;
}

export const store = {
    async update(data: Partial<SaveData>): Promise<void> {
        const current = await this.load();
        const updatedData: SaveData = {
            ...current,
            ...data,
        };
        await this.save(updatedData);
    },

    async load(): Promise<SaveData> {
        try {
            console.log("Loading bestiary from save.json");
            const data = await readTextFile("save.json", {
                baseDir: BaseDirectory.Home,
            });
            const saveData = JSON.parse(data) as SaveData;

            console.log(`Loaded save.json`, saveData);
            return saveData;
        } catch (error) {
            console.error("Error loading save.json:", error);
            return { bestiary: {}, tracker: { combatants: [], selected: 0 } };
        }
    },

    async save(data: SaveData) {
        console.log("Saving save.json", data);
        return writeTextFile("save.json", JSON.stringify(data, null, 2), {
            baseDir: BaseDirectory.Home,
        })
            .then(() => console.log("Save successful"))
            .catch((error) => console.error("Error saving bestiary:", error));
    },
};
