import { Combatant } from "../../model/Combatant";
import { ActionIcon, Autocomplete, TextInput, Tooltip } from "@mantine/core";
import { IoMdPersonAdd } from "react-icons/io";
import { useForm } from "@mantine/form";
import { useContext } from "react";
import { Context } from "../../model/Context";
import { StatBlock } from "../../model/StatBlock";

interface Props {
    onAddCombatant: (combatant: Combatant, quantity: number) => void;
}

export const AddCombatantRow = ({ onAddCombatant }: Props) => {
    const { bestiary } = useContext(Context);
    const bestiaryKv = Object.keys(bestiary);

    const form = useForm({
        mode: "controlled",
        initialValues: {
            name: "",
            hp: "",
            ac: "",
            initiative: "",
            quantity: "",
        },
        onValuesChange(values, previous) {
            if (values.name !== previous.name) {
                const value = values.name;

                if (value) {
                    // @ts-ignore
                    const monster = bestiary[value] as StatBlock;

                    if (monster) {
                        form.setValues({
                            name: monster.name,
                            hp: monster.hitPoints.value.toString(),
                            ac: monster.armorClass.toString(),
                            initiative: monster.initiativeBonus
                                ? monster.initiativeBonus.toString()
                                : "",
                        });
                    }
                }
            }
        },
    });

    const valid = form.values.name && form.values.hp && form.values.ac;

    const submit = () => {
        const newCombatant: Combatant = {
            id: crypto.randomUUID(),
            name: form.values.name,
            hp: parseInt(form.values.hp),
            max: parseInt(form.values.hp),
            ac: parseInt(form.values.ac),
            initiative: 0,
            initiativeBonus: parseInt(form.values.initiative || "0"),
            conditions: [],
            discriminator: undefined,
            deathSaves: { death: 0, life: 0 },
            // @ts-ignore
            statBlock: bestiary[form.values.name] || {
                name: form.values.name,
                hitPoints: {
                    value: parseInt(form.values.hp),
                },
                armorClass: parseInt(form.values.ac),
                actions: [],
                reactions: [],
                legendaryActions: [],
                traits: [],
            },
        };
        onAddCombatant(
            newCombatant,
            form.values.quantity ? parseInt(form.values.quantity) : 1
        );
        form.reset();
    };

    return (
        <div className="add-card">
            <Autocomplete
                data={bestiaryKv}
                key={form.key("name")}
                placeholder="Search bestiary or add a combatant…"
                variant="filled"
                {...form.getInputProps("name")}
                rightSectionWidth={92}
                rightSection={
                    <Autocomplete
                        placeholder="Qty"
                        variant="filled"
                        key={form.key("quantity")}
                        {...form.getInputProps("quantity")}
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
                            value: i.toString(),
                            label: i.toString(),
                        }))}
                    />
                }
                clearable
            />
            <TextInput
                placeholder="HP"
                variant="filled"
                key={form.key("hp")}
                {...form.getInputProps("hp")}
            />
            <TextInput
                placeholder="AC"
                variant="filled"
                key={form.key("ac")}
                {...form.getInputProps("ac")}
            />
            <TextInput
                placeholder="Init +"
                variant="filled"
                key={form.key("initiative")}
                {...form.getInputProps("initiative")}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && valid) submit();
                }}
            />
            <Tooltip label="Add to encounter" openDelay={300}>
                <ActionIcon
                    variant="filled"
                    color="orange"
                    size="lg"
                    radius="md"
                    disabled={!valid}
                    onClick={submit}
                >
                    <IoMdPersonAdd />
                </ActionIcon>
            </Tooltip>
        </div>
    );
};
