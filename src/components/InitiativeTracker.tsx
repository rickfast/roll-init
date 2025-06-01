import { Combatant } from "../model/Combatant";
import { ActionIcon, Affix, Button, MultiSelect, Table } from "@mantine/core";
import { AddCombatantRow } from "./AddCombatantRow";
import { useContext } from "react";
import { Context } from "../model/Context";
import { PiPlayBold } from "react-icons/pi";
import { FaDiceD20, FaSortAmountDown } from 'react-icons/fa';
import { NumberCell } from "./NumberCell";
import { ClickInput } from "./ClickInput";
import { FeatureModal } from "./FeatureModal";
import { conditions } from "../model/data";

export const InitiativeTracker = () => {
    const { 
        allCombatants, 
        selected, 
        addCombatant, 
        updateCombatant, 
        next, 
        rollInitiative, 
        rollAllInitiative, 
        sort 
    } = useContext(Context);

    return (
        <>
            <Affix position={{ bottom: 40, right: 40 }}>
                <ActionIcon radius="xl" size={60} onClick={() => { next() }}>
                    <PiPlayBold />
                </ActionIcon>
            </Affix>
            <Affix position={{ bottom: 50, right: 120 }}>
                <Button
                    variant="outline"
                    rightSection={<FaDiceD20 />}
                    onClick={rollAllInitiative}>
                    Roll Initiative
                </Button>
            </Affix>
            <Affix position={{ bottom: 50, right: 280 }}>
                <Button
                    variant="outline"
                    rightSection={<FaSortAmountDown />}
                    onClick={sort}>
                    Sort
                </Button>
            </Affix>
            <Table layout="fixed">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th></Table.Th>
                        <Table.Th>HP</Table.Th>
                        <Table.Th>AC</Table.Th>
                        <Table.Th>Initiative</Table.Th>
                        <Table.Th>Conditions</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {allCombatants()
                        .map(([id, combatant], index) => {
                            return <Table.Tr key={id} style={{ backgroundColor: selected === index ? '#3b3b3b' : 'transparent' }}>
                                <Table.Td colSpan={2}>{combatant.name} {combatant.discriminator ? combatant.discriminator : ''}</Table.Td>
                                <Table.Td><NumberCell initialValue={combatant.hp} label="HP" onChange={(hp) => updateCombatant(id, { hp })} /></Table.Td>
                                <Table.Td><ClickInput initialValue={combatant.ac} onChange={(ac) => updateCombatant(id, { ac })} /></Table.Td>
                                <Table.Td><ClickInput initialValue={combatant.initiative} onChange={(initiative) => updateCombatant(id, { initiative })} /></Table.Td>
                                <Table.Td>
                                    <MultiSelect
                                        data={conditions}
                                        value={combatant.conditions}
                                        onChange={(conditions) => updateCombatant(id, { conditions })} />
                                </Table.Td>
                                <Table.Td>
                                    <ActionIcon variant="outline" onClick={() => rollInitiative(id)} style={{ marginLeft: '4px' }}>
                                        <FaDiceD20 />
                                    </ActionIcon>
                                    <FeatureModal statBlock={combatant.statBlock!} />
                                </Table.Td>
                            </Table.Tr>
                        })}
                    <AddCombatantRow onAddCombatant={(combatant: Combatant, quantity: number) => {
                        addCombatant(combatant, quantity);
                    }} />
                </Table.Tbody>
            </Table>
        </>
    );
}