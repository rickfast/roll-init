import { ActionIcon, Grid, Popover } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import { DeathSaves } from "../../model/Combatant";
import { RiSkullLine } from "react-icons/ri";
import React from "react";

type Icon = React.FC<{
    clicked: boolean;
}>;

const Death = ({ clicked }: { clicked: boolean }) => {
    return clicked ? <RiSkullLine color="red" /> : <RiSkullLine color="gray" />;
};

const Life = ({ clicked }: { clicked: boolean }) => {
    return clicked ? <FaPlus color="green" /> : <FaPlus color="gray" />;
};

const SaveActionItem = ({
    value,
    index,
    onClick,
    icon,
}: {
    value: number;
    index: number;
    onClick: (index: number) => void;
    icon: Icon;
}) => {
    return (
        <ActionIcon
            variant="outline"
            color="dark"
            onClick={() => onClick(index)}
        >
            {value >= index
                ? icon({ clicked: true })
                : icon({ clicked: false })}
        </ActionIcon>
    );
};

interface Props {
    deathSaves?: DeathSaves;
    onChange: (saves: DeathSaves) => void;
}

export const SaveRow = ({
    saves,
    field,
    onChange,
}: {
    saves: DeathSaves;
    field: "death" | "life";
    onChange: (saves: DeathSaves) => void;
}) => {
    return [1, 2, 3].map((index) => {
        const isClicked = saves[field] >= index;
        const icon = field === "death" ? Death : Life;
        return (
            <Grid.Col span={4} key={index} >
                <SaveActionItem
                    value={saves[field]}
                    index={index}
                    icon={icon}
                    onClick={() => {
                        const newSave = isClicked ? index - 1 : index;
                        const newSaves = { ...saves };
                        newSaves[field] = newSave;
                        onChange(newSaves);
                    }}
                />
            </Grid.Col>
        );
    });
};

export const DeathSaveTracker = ({ deathSaves, onChange }: Props) => {
    const saves: DeathSaves = deathSaves || { death: 0, life: 0 };

    return (
        <Popover width={200}>
            <Popover.Target>
                <ActionIcon style={{ marginLeft: "4px" }}>
                    <RiSkullLine />
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
                <Grid>
                    <SaveRow
                        saves={saves}
                        field="death"
                        onChange={(newSaves) => onChange(newSaves)}
                    />
                    <SaveRow
                        saves={saves}
                        field="life"
                        onChange={(newSaves) => onChange(newSaves)}
                    />
                </Grid>
            </Popover.Dropdown>
        </Popover>
    );
};
