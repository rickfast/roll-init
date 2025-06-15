import { useContext, useState } from "react";
import { Context } from "../model/Context";
import { Box, Grid, Table } from "@mantine/core";
import { StatBlockDisplay } from "./StatBlockDisplay";
import { NavActionButton } from "./NavActionButton";
import { FaEdit } from "react-icons/fa";
import { TrackActionIcon } from "./TrackActionIcon";
import { fromStatBlock } from "../model/Combatant";
import { showNotification } from "@mantine/notifications";
import { useLocation, useSearchParams } from "react-router";
import { StatBlockDisplay2 } from "./StatBlockDisplay2";

export const Bestiary = () => {
    const { bestiary, addCombatant } = useContext(Context);
    const [searchParams] = useSearchParams();
    
    const [selectedStatBlockId, selectStatBlock] = useState<string | null>(null);

    const selected = selectedStatBlockId || searchParams.get('id'); 

    return (
        <Box mx="auto">
            <Grid>
                <Grid.Col span={6}>
                    <Table striped highlightOnHover withColumnBorders>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Name</Table.Th>
                                <Table.Th>Type</Table.Th>
                                <Table.Th>CR</Table.Th>
                                <Table.Th>Actions</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {Object.entries(bestiary).map(([id, monster]) => (
                                <Table.Tr key={id} onClick={() => selectStatBlock(id)} style={{ backgroundColor: selectedStatBlockId === id ? '#3b3b3b' : 'transparent' }}>
                                    <Table.Td>{monster.name}</Table.Td>
                                    <Table.Td>{monster.type}</Table.Td>
                                    <Table.Td>{monster.challengeRating}</Table.Td>
                                    <Table.Td>
                                        <NavActionButton icon={<FaEdit />} href={`/statblock?id=${id}`} />
                                        <TrackActionIcon onChange={(quantity) => {
                                            addCombatant(fromStatBlock(monster), quantity);
                                            showNotification({
                                                title: 'Combatant Added',
                                                message: `Added ${quantity} ${monster.name}(s) to Initiative Tracker.`,
                                                color: 'green',
                                            });
                                        }} />
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Grid.Col>
                <Grid.Col span={6}>
                    {selected && (
                        <StatBlockDisplay2
                            statBlock={bestiary[selected]} />
                    )}
                </Grid.Col>
            </Grid>
        </Box>
    );
}