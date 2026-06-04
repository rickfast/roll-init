import { useState } from "react";
import { Badge, SegmentedControl, Stack, Tabs } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { GiBleedingWound, GiBrokenSkull } from "react-icons/gi";
import criticalHits from "../../model/criticalHits.json";
import criticalMisses from "../../model/criticalMisses.json";
import "../table/tables.css";

type CritEntry = {
    type: string;
    result: string;
    name: string;
    effect: string;
};

const attackTypes = ["All", "Melee", "Ranged", "Magic"];

const typeColor: Record<string, string> = {
    Melee: "orange",
    Ranged: "teal",
    Magic: "violet",
};

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
                color="orange"
            />
            <div className="crit-card">
                <DataTable
                    striped
                    highlightOnHover
                    records={filtered}
                    idAccessor="result"
                    columns={[
                        {
                            accessor: "type",
                            width: 100,
                            render: ({ type }) => (
                                <Badge
                                    color={typeColor[type] || "gray"}
                                    variant="light"
                                    size="sm"
                                >
                                    {type}
                                </Badge>
                            ),
                        },
                        {
                            accessor: "result",
                            title: "Roll",
                            width: 90,
                            render: ({ result }) => (
                                <span className="crit-roll">{result}</span>
                            ),
                        },
                        {
                            accessor: "name",
                            title: "Name",
                            width: 250,
                            render: ({ name }) => (
                                <span className="crit-name">{name}</span>
                            ),
                        },
                        {
                            accessor: "effect",
                            title: "Effect",
                            render: ({ effect }) => (
                                <span className="crit-effect">{effect}</span>
                            ),
                        },
                    ]}
                />
            </div>
        </Stack>
    );
}

export function CriticalTables() {
    return (
        <div>
            <div className="page-head">
                <h1 className="page-title">Critical Tables</h1>
                <div className="page-subtitle">
                    Roll on a natural 20 or natural 1 to add a twist to the
                    blow.
                </div>
            </div>

            <Tabs className="crit-tabs" defaultValue="hits" color="orange">
                <Tabs.List>
                    <Tabs.Tab
                        value="hits"
                        leftSection={<GiBleedingWound />}
                    >
                        Critical Hits
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="misses"
                        leftSection={<GiBrokenSkull />}
                    >
                        Critical Misses
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="hits" pt="md">
                    <CritTable data={criticalHits as CritEntry[]} />
                </Tabs.Panel>

                <Tabs.Panel value="misses" pt="md">
                    <CritTable data={criticalMisses as CritEntry[]} />
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}
