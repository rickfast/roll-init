import { useEffect, useState } from "react";
import { Grid, ScrollArea, Table } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router";
import { Filter, filterCatalog, FilterType } from "../../model/Filter";
import { useScrollIntoView } from "@mantine/hooks";
import { FilterPopover } from "./FilterPopover";

export interface Field {
    name: string;
    field: string;
    filter?: FilterType;
}

export interface Props<T> {
    fields: Field[];
    data: { [id: string]: T };
    path: string;
    actions?: (id: string, item: T) => React.ReactNode;
}

export function DataTable<T>({ fields, data, path, actions }: Props<T>) {
    const [searchParams] = useSearchParams();
    const selected = searchParams.get('id');
    const navigate = useNavigate();
    const [filters, setFilters] = useState<Map<string, Filter>>(new Map<string, Filter>());
    const { scrollableRef, targetRef, scrollIntoView } = useScrollIntoView({
        offset: 40
    });

    let liveData = Array.from(Object.entries(data));

    useEffect(() => {
        scrollIntoView();

        if (searchParams.get('search')) {
            setFilters(new Map());
        }
    }, [selected]);

    filters.forEach(filter => {
        const fn = filterCatalog[filter.type];

        liveData = liveData.filter(([_, item]) => {
            // @ts-ignore
            return fn(item[filter.field], filter.value);
        });
    });

    const setFilter = (field: string, type: FilterType, value: any) => {
        const map = new Map<string, Filter>();

        map.set(field, { field, type, value });

        setFilters(map);
    };

    const clearFilter = (field: string) => {
        const map = new Map<string, Filter>();

        map.delete(field);

        setFilters(map);
    }

    return (
        <ScrollArea h={window.innerHeight - 100} viewportRef={scrollableRef}>
            <Table striped highlightOnHover withColumnBorders stickyHeader>
                <Table.Thead>
                    <Table.Tr>
                        {
                            fields.map(field => {
                                return <Table.Th>
                                    <Grid>
                                        <Grid.Col span={10}>
                                            {field.name}                                            
                                        </Grid.Col>
                                        <Grid.Col span={2}>
                                            {field.filter && <FilterPopover onClear={() => clearFilter(field.field)} onFilter={(value => setFilter(field.field, field.filter!, value))} />}
                                        </Grid.Col>
                                    </Grid>
                                </Table.Th>
                            })
                        }
                        {
                            actions && <Table.Th>Actions</Table.Th>
                        }
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {liveData.map(([id, item]) => (
                        <Table.Tr
                            id={`row-${id}`}
                            key={id}
                            onClick={() => navigate(`${path}?id=${id}`)}
                            ref={selected === id ? targetRef : undefined}
                            style={{ backgroundColor: selected === id ? '#3b3b3b' : 'transparent' }}>
                            {
                                // @ts-ignore
                                fields.map(field => <Table.Td>{item[field.field]}</Table.Td>)
                            }
                            {
                                actions && <Table.Td>{actions(id, item)}</Table.Td>
                            }
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}