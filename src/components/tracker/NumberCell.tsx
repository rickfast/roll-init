import { Button, Input, Popover } from "@mantine/core";
import React from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { ClickInput } from "./ClickInput";

interface Props {
    initialValue: number;
    label: string;
    onChange: (value: number) => void;
}

export const NumberCell = ({ initialValue, label, onChange }: Props) => {
    const NumberPopover = ({
        multiplier,
        icon,
    }: {
        multiplier?: -1;
        icon: React.ReactNode;
    }) => {
        const [value, setValue] = React.useState(initialValue);

        return (
            <Popover>
                <Popover.Target>
                    <Button variant="default" radius="md">
                        {icon}
                    </Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <Input
                        type="number"
                        placeholder={label}
                        onChange={(e) => {
                            setValue(Number(e.currentTarget.value));
                        }}
                        autoFocus
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onChange(
                                    initialValue + value * (multiplier || 1)
                                );
                            }
                        }}
                    />
                </Popover.Dropdown>
            </Popover>
        );
    };

    return (
        <Button.Group>
            <NumberPopover multiplier={-1} icon={<GoChevronDown />} />
            <Button.GroupSection
                variant="default"
                bg="var(--mantine-color-body)"
            >
                <ClickInput
                    initialValue={initialValue}
                    onChange={(value) => {
                        onChange(value);
                    }}
                />
            </Button.GroupSection>
            <NumberPopover icon={<GoChevronUp />} />
        </Button.Group>
    );
};
