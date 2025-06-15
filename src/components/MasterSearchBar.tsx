'use client';

import { Autocomplete } from "@mantine/core"
import { useContext, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa"
import { GiSpikedDragonHead, GiBoltSpellCast } from "react-icons/gi";
import { Context } from "../model/Context";
import { NavLink } from "./NavLink";

const typeToIcons: { [type: string]: React.ReactNode } = {
    'spell': <GiBoltSpellCast />,
    'monster': <GiSpikedDragonHead />,
}

export const MasterSearchBar = () => {
    const { searchable } = useContext(Context);
    const autocompleteRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');
    const data = Array.from(searchable.keys()).sort();

    return (
        <Autocomplete
            // @ts-ignore
            data={data}
            radius="xl"
            size="md"
            value={value}
            renderOption={(input) => {
                const item = searchable.get(input.option.value)!;
                const icon = typeToIcons[item.type] || null;
                
                return <NavLink href={item.href} label={item.value} icon={icon} onClick={() => setValue('')}/>                // return (<NavLink to={item.href}>{icon} {input.option.value}</NavLink>)
            }}
            rightSectionWidth={42}
            rightSection={<FaSearch />}
            ref={autocompleteRef}
            onChange={setValue}
            onOptionSubmit={() => setValue('')}
        />
    )
}