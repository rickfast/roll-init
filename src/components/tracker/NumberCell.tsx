import { ActionIcon, Input, Popover, Tooltip } from "@mantine/core";
import React from "react";
import { LuMinus, LuPlus, LuShield } from "react-icons/lu";
import { HpBar } from "./HpBar";

interface Props {
    initialValue: number;
    label: string;
    onChange: (value: number) => void;
    max?: number;
    tempValue?: number;
    onChangeTemp?: (value: number) => void;
}

const ValuePopover = ({
    icon,
    tooltip,
    color,
    start,
    onApply,
}: {
    icon: React.ReactNode;
    tooltip: string;
    color: string;
    start: number;
    onApply: (value: number) => void;
}) => {
    const [opened, setOpened] = React.useState(false);
    const [value, setValue] = React.useState(start);

    return (
        <Popover
            opened={opened}
            onChange={setOpened}
            trapFocus
            position="bottom"
            withArrow
            shadow="md"
        >
            <Popover.Target>
                <Tooltip label={tooltip} openDelay={300}>
                    <ActionIcon
                        variant="light"
                        color={color}
                        radius="md"
                        size="md"
                        onClick={() => {
                            setValue(start);
                            setOpened((o) => !o);
                        }}
                    >
                        {icon}
                    </ActionIcon>
                </Tooltip>
            </Popover.Target>
            <Popover.Dropdown p={6}>
                <Input
                    type="number"
                    size="xs"
                    w={88}
                    placeholder={tooltip}
                    defaultValue={start || ""}
                    autoFocus
                    onChange={(e) => setValue(Number(e.currentTarget.value))}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onApply(value);
                            setOpened(false);
                        }
                    }}
                />
            </Popover.Dropdown>
        </Popover>
    );
};

export const NumberCell = ({
    initialValue,
    onChange,
    max,
    tempValue,
    onChangeTemp,
}: Props) => {
    const [setOpen, setSetOpen] = React.useState(false);

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
        <div className="hp-cell">
            <Popover
                opened={setOpen}
                onChange={setSetOpen}
                position="bottom"
                withArrow
                shadow="md"
                trapFocus
            >
                <Popover.Target>
                    <Tooltip label="Set current HP" openDelay={300}>
                        <div
                            style={{ cursor: "pointer" }}
                            onClick={() => setSetOpen((o) => !o)}
                        >
                            <HpBar
                                hp={initialValue}
                                max={max}
                                temp={tempValue}
                            />
                        </div>
                    </Tooltip>
                </Popover.Target>
                <Popover.Dropdown p={6}>
                    <Input
                        type="number"
                        size="xs"
                        w={88}
                        placeholder="HP"
                        defaultValue={initialValue}
                        autoFocus
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onChange(Number(e.currentTarget.value));
                                setSetOpen(false);
                            }
                        }}
                    />
                </Popover.Dropdown>
            </Popover>
            <div className="hp-controls">
                <ValuePopover
                    icon={<LuMinus />}
                    tooltip="Damage"
                    color="red"
                    start={0}
                    onApply={applyDamage}
                />
                <ValuePopover
                    icon={<LuPlus />}
                    tooltip="Heal"
                    color="teal"
                    start={0}
                    onApply={applyHeal}
                />
                {onChangeTemp && (
                    <ValuePopover
                        icon={<LuShield />}
                        tooltip="Temp HP"
                        color="blue"
                        start={tempValue ?? 0}
                        onApply={(v) => onChangeTemp(Math.max(0, v))}
                    />
                )}
            </div>
        </div>
    );
};
