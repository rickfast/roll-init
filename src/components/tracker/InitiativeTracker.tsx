import { Combatant } from "../../model/Combatant";
import {
    ActionIcon,
    AppShell,
    Button,
    Drawer,
    Group,
    MultiSelect,
    Popover,
    Table,
} from "@mantine/core";
import { AddCombatantRow } from "./AddCombatantRow";
import { useContext, useState } from "react";
import { StatBlockDisplay2 } from "../statblock/StatBlockDisplay2";
import { StatBlock } from "../../model/StatBlock";
import { Context } from "../../model/Context";
import { PiCampfireDuotone, PiPlayBold } from "react-icons/pi";
import { FaDiceD20, FaSearch, FaSortAmountDown } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { NumberCell } from "./NumberCell";
import { ClickInput } from "./ClickInput";
import { conditionOptions } from "../../model/Condition";
import { showNotification } from "@mantine/notifications";
import { Saves } from "./Saves";
import { DiscriminatorComboBox } from "./DiscriminatorComboBox";
import { DiscriminatorBadge } from "./Discriminator";
import { ConditionDisplay } from "./ConditionDisplay";
import { LuLockKeyhole, LuLockOpen, LuSword } from "react-icons/lu";
import { DeathSaveTracker } from "./DeathSaveTracker";

export const InitiativeTracker = () => {
    const {
        allCombatants,
        selected,
        addCombatant,
        updateCombatant,
        deleteCombatant,
        next,
        rollInitiative,
        rollAllInitiative,
        sort,
        longRest,
    } = useContext(Context);

    const [drawerOpened, setDrawerOpened] = useState(false);
    const [selectedStatBlock, setSelectedStatBlock] =
        useState<StatBlock | null>(null);

    return (
        <>
            <Table layout="fixed">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th colSpan={4}>Name</Table.Th>
                        <Table.Th colSpan={2}>HP</Table.Th>
                        <Table.Th colSpan={1}>AC</Table.Th>
                        <Table.Th colSpan={1}>Initiative</Table.Th>
                        <Table.Th colSpan={3}>Conditions</Table.Th>
                        <Table.Th colSpan={2}>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {allCombatants().map(([id, combatant], index) => {
                        return (
                            <Table.Tr
                                key={id}
                                style={{
                                    backgroundColor:
                                        selected === index
                                            ? "#3b3b3b"
                                            : "transparent",
                                }}
                            >
                                <Table.Td colSpan={4}>
                                    {combatant.name}{" "}
                                    {combatant.discriminator && (
                                        <>
                                            <DiscriminatorBadge
                                                type={
                                                    combatant.discriminator.type
                                                }
                                                value={
                                                    combatant.discriminator
                                                        .value
                                                }
                                            />
                                        </>
                                    )}
                                    <br />
                                    {combatant.statBlock?.savingThrows && (
                                        <Saves
                                            statBlock={combatant.statBlock}
                                        />
                                    )}
                                </Table.Td>
                                <Table.Td colSpan={2}>
                                    <NumberCell
                                        initialValue={combatant.hp}
                                        label="HP"
                                        max={combatant.max}
                                        tempValue={combatant.tempHp}
                                        onChange={(hp) =>
                                            updateCombatant(id, { hp })
                                        }
                                        onChangeTemp={(tempHp) =>
                                            updateCombatant(id, { tempHp })
                                        }
                                    />
                                    {combatant.max !== undefined && (
                                        <div
                                            style={{
                                                fontSize: "0.75em",
                                                color: "#888",
                                            }}
                                        >
                                            {combatant.hp} / {combatant.max}
                                            {combatant.tempHp ? (
                                                <span
                                                    style={{
                                                        color: "#4dabf7",
                                                        marginLeft: 4,
                                                    }}
                                                >
                                                    +{combatant.tempHp} temp
                                                </span>
                                            ) : null}
                                        </div>
                                    )}
                                </Table.Td>
                                <Table.Td colSpan={1}>
                                    <ClickInput
                                        initialValue={combatant.ac}
                                        onChange={(ac) =>
                                            updateCombatant(id, { ac })
                                        }
                                    />
                                </Table.Td>
                                <Table.Td colSpan={1}>
                                    <ClickInput
                                        initialValue={combatant.initiative}
                                        onChange={(initiative) =>
                                            updateCombatant(id, { initiative })
                                        }
                                    />
                                    {combatant.initiativeBonus !==
                                        undefined && (
                                        <div
                                            style={{
                                                fontSize: "0.75em",
                                                color: "#888",
                                            }}
                                        >
                                            {combatant.initiativeBonus >= 0
                                                ? `+${combatant.initiativeBonus}`
                                                : combatant.initiativeBonus}
                                        </div>
                                    )}
                                </Table.Td>
                                <Table.Td colSpan={3}>
                                    <MultiSelect
                                        data={conditionOptions}
                                        searchable
                                        value={combatant.conditions}
                                        leftSection={
                                            combatant.conditions?.length >
                                                0 && (
                                                <Popover
                                                    width={500}
                                                    position="bottom"
                                                    withArrow
                                                    shadow="md"
                                                >
                                                    <Popover.Target>
                                                        <ActionIcon variant="transparent">
                                                            <FaSearch />
                                                        </ActionIcon>
                                                    </Popover.Target>
                                                    <Popover.Dropdown>
                                                        {combatant.conditions && (
                                                            <ConditionDisplay
                                                                conditions={
                                                                    combatant.conditions
                                                                }
                                                            />
                                                        )}
                                                    </Popover.Dropdown>
                                                </Popover>
                                            )
                                        }
                                        onChange={(conditions) =>
                                            updateCombatant(id, { conditions })
                                        }
                                    />
                                </Table.Td>
                                <Table.Td colSpan={2}>
                                    <ActionIcon
                                        variant="outline"
                                        onClick={() => rollInitiative(id)}
                                        style={{ marginLeft: "4px" }}
                                    >
                                        <FaDiceD20 />
                                    </ActionIcon>
                                    <ActionIcon
                                        variant="outline"
                                        disabled={!combatant.statBlock}
                                        style={{ marginLeft: "4px" }}
                                        onClick={() => {
                                            if (combatant.statBlock) {
                                                setSelectedStatBlock(
                                                    combatant.statBlock
                                                );
                                                setDrawerOpened(true);
                                            }
                                        }}
                                    >
                                        <LuSword />
                                    </ActionIcon>
                                    {combatant.locked ? (
                                        <DeathSaveTracker
                                            deathSaves={combatant.deathSaves}
                                            onChange={(deathSaves) =>
                                                updateCombatant(id, {
                                                    deathSaves,
                                                })
                                            }
                                        />
                                    ) : (
                                        <ActionIcon
                                            variant="outline"
                                            onClick={() => deleteCombatant(id)}
                                            style={{ marginLeft: "4px" }}
                                            disabled={combatant.locked}
                                        >
                                            <RiDeleteBin2Line />
                                        </ActionIcon>
                                    )}
                                    <DiscriminatorComboBox
                                        onChange={(discriminator) =>
                                            updateCombatant(id, {
                                                discriminator,
                                            })
                                        }
                                    />
                                    <ActionIcon
                                        variant="outline"
                                        color={
                                            combatant.locked ? "red" : "blue"
                                        }
                                        onClick={() =>
                                            updateCombatant(id, {
                                                locked: !combatant.locked,
                                            })
                                        }
                                        style={{ marginLeft: "4px" }}
                                    >
                                        {combatant.locked ? (
                                            <LuLockKeyhole />
                                        ) : (
                                            <LuLockOpen />
                                        )}
                                    </ActionIcon>
                                </Table.Td>
                            </Table.Tr>
                        );
                    })}
                    <AddCombatantRow
                        onAddCombatant={(
                            combatant: Combatant,
                            quantity: number
                        ) => {
                            addCombatant(combatant, quantity);
                            showNotification({
                                title: "Combatant Added",
                                message: `${combatant.name} added to initiative tracker.`,
                                color: "green",
                                autoClose: 3000,
                            });
                        }}
                    />
                </Table.Tbody>
            </Table>
            <AppShell.Footer p="xs">
                <Group justify="flex-end" gap="sm" h="100%">
                    <Button
                        variant="outline"
                        rightSection={<PiCampfireDuotone />}
                        onClick={() => {
                            longRest();
                            showNotification({
                                title: "Long Rest",
                                message:
                                    "All party members have been fully healed.",
                                color: "green",
                                autoClose: 3000,
                            });
                        }}
                    >
                        Long Rest
                    </Button>
                    <Button
                        variant="outline"
                        rightSection={<FaSortAmountDown />}
                        onClick={sort}
                    >
                        Sort
                    </Button>
                    <Button
                        variant="outline"
                        rightSection={<FaDiceD20 />}
                        onClick={rollAllInitiative}
                    >
                        Roll Initiative
                    </Button>
                    <ActionIcon
                        radius="xl"
                        size={42}
                        onClick={() => {
                            next();
                        }}
                    >
                        <PiPlayBold />
                    </ActionIcon>
                </Group>
            </AppShell.Footer>
            <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                position="right"
                size="xl"
                padding="md"
                overlayProps={{ backgroundOpacity: 0.5 }}
            >
                {selectedStatBlock && (
                    <StatBlockDisplay2 statBlock={selectedStatBlock} />
                )}
            </Drawer>
        </>
    );
};
