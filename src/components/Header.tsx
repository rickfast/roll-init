import { useContext } from "react"
import { Context } from "../model/Context"
import { Affix, Burger, Group, Loader } from "@mantine/core";
import { SiDungeonsanddragons } from "react-icons/si";
import { MasterSearchBar } from "./MasterSearchBar";

export const Header = () => {
    const { saving } = useContext(Context);

    return (
        <Group h="100%" px="md">
            <Burger opened={true} onClick={() => { }} hiddenFrom="sm" size="sm" />
            <SiDungeonsanddragons size={36} />
            <span style={{fontSize: '1.5rem'}}>Roll Initiative</span>
            <Affix position={{ top: 8, right: 120 }}><MasterSearchBar /></Affix>
            { saving && <Affix position={{ top: 0, right: 20 }}><Loader size="xl" /></Affix> }           
        </Group>
    );
}