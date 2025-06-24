import { useContext } from "react";
import { Context } from "../../model/Context";
import { Box, Grid } from "@mantine/core";
import { useSearchParams } from "react-router";
import { SpellDisplay } from "./SpellDisplay";
import { DataTable } from "../table/DataTable";

export const Spells = () => {
    const { spells } = useContext(Context);
    const [searchParams] = useSearchParams();
    const selected = searchParams.get('id');

    return (
        <Box mx="auto">
            <Grid>
                <Grid.Col span={6}>
                    <DataTable
                        data={spells}
                        fields={[
                            {
                                name: 'Name',
                                field: 'name',
                                filter: 'like'
                            },
                            {
                                name: 'Type',
                                field: 'school'
                            },
                            {
                                name: 'Level',
                                field: 'level'
                            }
                        ]}
                        path="/spells"
                    />
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