import { ActionIcon, Popover } from "@mantine/core";
import { StatBlock } from "../../model/StatBlock";
import { FeatureDisplay } from "./FeatureDisplay";
import { LuSword } from "react-icons/lu";

interface Props {
    statBlock?: StatBlock;
}

export const ActionPopover = ({ statBlock }: Props) => {
    return (
        <Popover width={300} position="bottom" withArrow>
            <Popover.Target>
                <ActionIcon
                    variant="outline"
                    disabled={!statBlock}
                    style={{ marginLeft: "4px" }}
                >
                    <LuSword />
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
                <FeatureDisplay features={statBlock!.actions} />
                {statBlock!.reactions && (
                    <FeatureDisplay features={statBlock!.reactions} />
                )}
                {statBlock!.legendaryActions && (
                    <FeatureDisplay features={statBlock!.legendaryActions} />
                )}
            </Popover.Dropdown>
        </Popover>
    );
};
