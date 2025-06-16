import { useContext } from "react";
import { Context } from "../../model/Context";
import { Box, Grid, ScrollArea } from "@mantine/core";
import { NavActionButton } from "../NavActionButton";
import { FaEdit } from "react-icons/fa";
import { TrackActionIcon } from "./TrackActionIcon";
import { fromStatBlock } from "../../model/Combatant";
import { showNotification } from "@mantine/notifications";
import { useSearchParams } from "react-router";
import { StatBlockDisplay2 } from "../statblock/StatBlockDisplay2";
import { useScrollIntoView } from "@mantine/hooks";
import { DataTable } from "../table/DataTable";

export const Bestiary = () => {
    const { bestiary, addCombatant } = useContext(Context);
    const [searchParams] = useSearchParams();
    const selected = searchParams.get('id');
    const { scrollableRef } = useScrollIntoView();

    return (
        <Box mx="auto">
            <Grid>
                <Grid.Col span={6}>
                    <ScrollArea h={window.innerHeight - 100} viewportRef={scrollableRef}>
                        <DataTable
                            fields={[
                                {
                                    name: 'Name',
                                    field: 'name',
                                    filter: 'like'
                                },
                                {
                                    name: 'Type',
                                    field: 'type'
                                },
                                {
                                    name: 'CR',
                                    field: 'challengeRating'
                                }
                            ]}
                            data={bestiary}
                            path="/bestiary"
                            actions={(id, monster) =>
                                <>
                                    <NavActionButton icon={<FaEdit />} href={`/statblock?id=${id}`} />
                                    <TrackActionIcon onChange={(quantity) => {
                                        addCombatant(fromStatBlock(monster), quantity);
                                        showNotification({
                                            title: 'Combatant Added',
                                            message: `Added ${quantity} ${monster.name}(s) to Initiative Tracker.`,
                                            color: 'green',
                                        });
                                    }} />
                                </>
                            }
                        />
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