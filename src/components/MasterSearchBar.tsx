"use client";

import { Autocomplete } from "@mantine/core";
import { useContext, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiSpikedDragonHead, GiBoltSpellCast } from "react-icons/gi";
import { Context } from "../model/Context";
import { NavLink } from "./NavLink";

const typeToIcons: { [type: string]: React.ReactNode } = {
    spell: <GiBoltSpellCast />,
    monster: <GiSpikedDragonHead />,
};

export const MasterSearchBar = () => {
    const { searchable } = useContext(Context);
    const [value, setValue] = useState("");
    const data = Array.from(searchable.keys()).sort();
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Autocomplete
            data={data}
            radius="xl"
            size="md"
            value={value}
            renderOption={(input) => {
                const item = searchable.get(input.option.value)!;
                const icon = typeToIcons[item.type] || null;

                return (
                    <NavLink
                        icon={icon}
                        href={`${item.href}&search=1`}
                        label={item.value}
                    />
                );
            }}
            rightSectionWidth={42}
            rightSection={<FaSearch />}
            onChange={setValue}
            limit={10}
            ref={inputRef}
            onClick={() => inputRef.current?.select()}
        />
    );
};
