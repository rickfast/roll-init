import { useContext, useState } from "react";
import { Context } from "../model/Context";
import { DataTable } from 'mantine-datatable';
import { Box, Grid } from "@mantine/core";
import { StatBlockDisplay } from "./StatBlockDisplay";
import { NavActionButton } from "./NavActionButton";
import { FaEdit } from "react-icons/fa";

export const Bestiary = () => {
    const { bestiary } = useContext(Context);
    const [selectedStatBlockId, selectStatBlock] = useState<string | null>(null);

    return (
        <Box mx="auto">
            <Grid>
                <Grid.Col span={6}>
                    <DataTable
                        withTableBorder
                        borderRadius="sm"
                        withColumnBorders
                        striped
                        highlightOnHover
                        records={Object.entries(bestiary)}
                        height={900}
                        columns={[
                            { accessor: '1.name', title: 'Name', sortable: true },
                            { accessor: '1.type', title: 'Type' },
                            { accessor: '1.challengeRating', title: 'CR', sortable: true },
                            { accessor: '0', render: (record) => <NavActionButton icon={<FaEdit />} href={`/statblock?id=${record[0]}`} />}
                        ]}
                        onRowClick={(record) => selectStatBlock(record.record[0])}
                        idAccessor="0"
                        // selectedRecords={}
                        noRecordsText="No monsters found in the bestiary" />
                </Grid.Col>
                <Grid.Col span={6}>
                    {selectedStatBlockId && (
                        <StatBlockDisplay
                            statBlock={bestiary[selectedStatBlockId]} />
                    )}
                </Grid.Col>
            </Grid>
        </Box>
    );
}