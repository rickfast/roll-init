import { useContext } from "react";
import { Context } from "../model/Context";
import { Burger, Group, Loader } from "@mantine/core";
import { SiDungeonsanddragons } from "react-icons/si";
import { MasterSearchBar } from "./MasterSearchBar";

export const Header = () => {
    const { saving } = useContext(Context);

    return (
        <Group
            className="app-header"
            h="100%"
            justify="space-between"
            wrap="nowrap"
        >
            <Group gap="sm" wrap="nowrap">
                <Burger
                    opened={true}
                    onClick={() => {}}
                    hiddenFrom="sm"
                    size="sm"
                />
                <div className="brand">
                    <span className="brand-mark">
                        <SiDungeonsanddragons size={34} />
                    </span>
                    <span className="brand-name">
                        Roll <span className="amp">Initiative</span>
                    </span>
                </div>
            </Group>
            <Group gap="md" wrap="nowrap">
                {saving && <Loader size="sm" />}
                <div style={{ width: 320, maxWidth: "40vw" }}>
                    <MasterSearchBar />
                </div>
            </Group>
        </Group>
    );
};
