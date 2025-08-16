import { ActionIcon, Button, NumberInput, Popover, Stack } from "@mantine/core";
import { LuSwords } from "react-icons/lu";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";

interface Props {
    onChange: (value: number) => void;
}

export const TrackActionIcon = ({ onChange }: Props) => {
    const form = useForm({
        initialValues: {
            quantity: "1",
        },
    });
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    return (
        <Popover opened={opened}>
            <Popover.Target>
                <ActionIcon
                    variant="outline"
                    onClick={() => setOpened((open) => !open)}
                    style={{ marginLeft: "4px" }}
                >
                    <LuSwords />
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown
                ref={ref}
                onKeyDown={(e) => e.key === "Escape" && setOpened(false)}
            >
                <Stack gap="md">
                    <NumberInput
                        placeholder="Quantity"
                        key={form.key("quantity")}
                        {...form.getInputProps("quantity")}
                    />
                    <Button
                        variant="outline"
                        onClick={() => {
                            const quantity = parseInt(form.values.quantity, 10);
                            if (!isNaN(quantity) && quantity > 0) {
                                onChange(quantity);
                                setOpened(false);
                            }
                        }}
                    >
                        Add
                    </Button>
                </Stack>
            </Popover.Dropdown>
        </Popover>
    );
};
