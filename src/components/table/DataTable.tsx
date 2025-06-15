import { useEffect, useState } from "react";
import { ScrollArea, Table } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router";
import { Filter, filterCatalog, FilterType } from "../../model/Filter";
import { useScrollIntoView } from "@mantine/hooks";
import { FilterPopover } from "./FilterPopover";

interface Field {
    name: string;
    field: string;
    filter?: FilterType;
}

interface Props<T> {
    fields: Field[];
    data: { [id: string]: T };
    path: string;
    actions?: React.ReactNode;
}

export function DataTable<T>({ fields, data, path, actions }: Props<T>) {
    const [searchParams] = useSearchParams();
    const selected = searchParams.get('id');
    const navigate = useNavigate();
    const [filters, setFilters] = useState<Map<string, Filter>>(new Map<string, Filter>());
    const { scrollableRef, targetRef, scrollIntoView } = useScrollIntoView();

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

    return (
        <ScrollArea h={window.innerHeight - 100} viewportRef={scrollableRef}>
            <Table striped highlightOnHover withColumnBorders stickyHeader>
                <Table.Thead>
                    <Table.Tr>
                        {
                            fields.map(field => {
                                return <Table.Th>
                                    {field.name}
                                    {field.filter && <FilterPopover onFilter={(value => setFilter(field.field, field.filter!, value))} />}
                                </Table.Th>
                            })
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
                            {actions && <Table.Td>
                                {actions}
                            </Table.Td>}
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}