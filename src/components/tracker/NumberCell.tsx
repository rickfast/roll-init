import { Button, Input, Popover } from "@mantine/core";
import React from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FaShieldAlt } from "react-icons/fa";
import { ClickInput } from "./ClickInput";

interface Props {
    initialValue: number;
    label: string;
    onChange: (value: number) => void;
    max?: number;
    tempValue?: number;
    onChangeTemp?: (value: number) => void;
}

export const NumberCell = ({
    initialValue,
    label,
    onChange,
    max,
    tempValue,
    onChangeTemp,
}: Props) => {
    const ValuePopover = ({
        icon,
        onApply,
    }: {
        icon: React.ReactNode;
        onApply: (value: number) => void;
    }) => {
        const [value, setValue] = React.useState(0);

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
                                onApply(value);
                            }
                        }}
                    />
                </Popover.Dropdown>
            </Popover>
        );
    };

    // Damage depletes temporary hit points before regular HP.
    const applyDamage = (amount: number) => {
        if (amount <= 0) return;

        const temp = tempValue ?? 0;
        if (temp > 0 && onChangeTemp) {
            const absorbed = Math.min(temp, amount);
            onChangeTemp(temp - absorbed);
            const remaining = amount - absorbed;
            if (remaining > 0) {
                onChange(initialValue - remaining);
            }
        } else {
            onChange(initialValue - amount);
        }
    };

    // Healing is capped at the combatant's maximum HP when known.
    const applyHeal = (amount: number) => {
        if (amount <= 0) return;

        const healed = initialValue + amount;
        onChange(max !== undefined ? Math.min(max, healed) : healed);
    };

    return (
        <Button.Group>
            <ValuePopover icon={<GoChevronDown />} onApply={applyDamage} />
            <Button.GroupSection
                variant="gradient"
                bg="var(--mantine-color-body)"
            >
                <ClickInput
                    initialValue={initialValue}
                    onChange={(value) => {
                        onChange(value);
                    }}
                />
            </Button.GroupSection>
            <ValuePopover icon={<GoChevronUp />} onApply={applyHeal} />
            {onChangeTemp && (
                <ValuePopover
                    icon={<FaShieldAlt />}
                    onApply={(value) => onChangeTemp(Math.max(0, value))}
                />
            )}
        </Button.Group>
    );
};
