import { ActionIcon, Chip, Grid, Popover } from "@mantine/core"
import { useContext } from "react";
import { GoHeartFill } from "react-icons/go"
import { Context } from "../model/Context";

const conditions = [
    "Blinded",
    "Charmed",
    "Deafened",
    "Frightened",
    "Grappled",
    "Incapacitated",
    "Invisible",
    "Paralyzed",
    "Petrified",
    "Poisoned",
    "Prone",
    "Restrained",
    "Stunned",
    "Unconscious",
    "Exhaustion"
];

interface Props {
    id: string;
}

export const ConditionPopover = ({ id }: Props) => {
    const { hasCondition, toggleCondition } = useContext(Context);

    return (
        <Popover width={160}>
            <Popover.Target>
                <ActionIcon variant={"outline"}>
                    <GoHeartFill />
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
                <Grid>
                    {conditions.map((condition) => (
                        <Grid.Col span={12} key={condition}>
                            <Chip
                                variant="filled"
                                color="blue"
                                checked={hasCondition(id, condition)}
                                onClick={() => toggleCondition(id, condition)}>
                                {condition}
                            </Chip>
                        </Grid.Col>
                    ))}
                </Grid>
            </Popover.Dropdown>
        </Popover>
    )
}