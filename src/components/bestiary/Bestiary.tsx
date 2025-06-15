import { useContext, useEffect, useState } from "react";
import { Context } from "../../model/Context";
import { Box, Grid, ScrollArea, Table } from "@mantine/core";
import { NavActionButton } from "../NavActionButton";
import { FaEdit } from "react-icons/fa";
import { TrackActionIcon } from "./TrackActionIcon";
import { fromStatBlock } from "../../model/Combatant";
import { showNotification } from "@mantine/notifications";
import { useNavigate, useSearchParams } from "react-router";
import { StatBlockDisplay2 } from "../statblock/StatBlockDisplay2";
import { FilterPopover } from "../table/FilterPopover";
import { Filter, filterCatalog, FilterType } from "../../model/Filter";
import { useScrollIntoView } from "@mantine/hooks";

export const Bestiary = () => {
    const { bestiary, addCombatant } = useContext(Context);
    const [searchParams] = useSearchParams();
    const selected = searchParams.get('id');
    const navigate = useNavigate();
    const [filters, setFilters] = useState<Map<string, Filter>>(new Map<string, Filter>());
    const { scrollableRef, targetRef, scrollIntoView } = useScrollIntoView();

    let monsters = Array.from(Object.entries(bestiary));

    useEffect(() => {
        scrollIntoView();

        if (searchParams.get('search')) {
            setFilters(new Map());
        }
    }, [selected])

    filters.forEach(filter => {
        const fn = filterCatalog[filter.type];

        monsters = monsters.filter(([_, statBlock]) => {
            return fn(statBlock[filter.field], filter.value);
        });
    });

    const setFilter = (field: string, type: FilterType, value: any) => {
        const map = new Map<string, Filter>();

        map.set(field, { field, type, value });

        setFilters(map);
    }

    return (
        <Box mx="auto">
            <Grid>
                <Grid.Col span={6}>
                    <ScrollArea h={window.innerHeight - 100} viewportRef={scrollableRef}>
                        <Table striped highlightOnHover withColumnBorders>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Name <FilterPopover onFilter={
                                        (value) => {
                                            setFilter('name', 'like', value);
                                        }
                                    } /></Table.Th>
                                    <Table.Th>Type</Table.Th>
                                    <Table.Th>CR</Table.Th>
                                    <Table.Th>Actions</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {monsters.map(([id, monster]) => (
                                    <Table.Tr
                                        id={`row-${id}`}
                                        key={id}
                                        onClick={() => navigate(`/bestiary?id=${id}`)}
                                        ref={selected === id ? targetRef : undefined}
                                        style={{ backgroundColor: selected === id ? '#3b3b3b' : 'transparent' }}>
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
                    </ScrollArea>
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