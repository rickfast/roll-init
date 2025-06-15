import { useContext, useState } from "react";
import { Context } from "../model/Context";
import { Box, Grid, Table } from "@mantine/core";
import { useSearchParams } from "react-router";
import { SpellDisplay } from "./SpellDisplay";

export const Spells = () => {
    const { spells } = useContext(Context);
    const [searchParams] = useSearchParams();
    
    const [selectedSpellId, selectSpell] = useState<string | null>(null);

    const selected = selectedSpellId || searchParams.get('id'); 

    return (
        <Box mx="auto">
            <Grid>
                <Grid.Col span={6}>
                    <Table striped highlightOnHover withColumnBorders>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Name</Table.Th>
                                <Table.Th>Type</Table.Th>
                                <Table.Th>Level</Table.Th>
                                <Table.Th>Actions</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {Object.entries(spells).map(([id, spell]) => (
                                <Table.Tr key={id} onClick={() => selectSpell(id)} style={{ backgroundColor: selected === id ? '#3b3b3b' : 'transparent' }}>
                                    <Table.Td>{spell.name}</Table.Td>
                                    <Table.Td>{spell.school}</Table.Td>
                                    <Table.Td>{spell.level}</Table.Td>
                                    <Table.Td>
                                    
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Grid.Col>
                <Grid.Col span={6}>
                    {selected && (
                        <SpellDisplay
                            spell={spells[selected]} />
                    )}
                </Grid.Col>
            </Grid>
        </Box>
    );
}