import { useState } from "react";
import { Tabs, SegmentedControl, Stack } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import criticalHits from "../../model/criticalHits.json";
import criticalMisses from "../../model/criticalMisses.json";

type CritEntry = {
    type: string;
    result: string;
    name: string;
    effect: string;
};

const attackTypes = ["All", "Melee", "Ranged", "Magic"];

function CritTable({ data }: { data: CritEntry[] }) {
    const [filter, setFilter] = useState("All");
    const filtered =
        filter === "All" ? data : data.filter((e) => e.type === filter);

    return (
        <Stack>
            <SegmentedControl
                data={attackTypes}
                value={filter}
                onChange={setFilter}
            />
            <DataTable
                withTableBorder
                borderRadius="sm"
                striped
                highlightOnHover
                records={filtered}
                idAccessor="result"
                columns={[
                    { accessor: "type", width: 80 },
                    { accessor: "result", title: "Roll", width: 70 },
                    { accessor: "name", title: "Name", width: 250 },
                    {
                        accessor: "effect",
                        title: "Effect",
                    },
                ]}
            />
        </Stack>
    );
}

export function CriticalTables() {
    return (
        <Tabs defaultValue="hits">
            <Tabs.List>
                <Tabs.Tab value="hits">Critical Hits</Tabs.Tab>
                <Tabs.Tab value="misses">Critical Misses</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="hits" pt="md">
                <CritTable data={criticalHits as CritEntry[]} />
            </Tabs.Panel>

            <Tabs.Panel value="misses" pt="md">
                <CritTable data={criticalMisses as CritEntry[]} />
            </Tabs.Panel>
        </Tabs>
    );
}
