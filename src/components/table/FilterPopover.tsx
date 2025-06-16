import { ActionIcon, Button, Popover, PopoverDropdown, PopoverTarget, Stack, TextInput } from "@mantine/core"
import { GoFilter } from "react-icons/go"

interface Props {
    onFilter: (value: string) => void;
    onClear: () => void;
}

export const FilterPopover = ({ onFilter, onClear }: Props) => {
    return (
        <Popover>
            <PopoverTarget>
                <ActionIcon>
                    <GoFilter />
                </ActionIcon>
            </PopoverTarget>
            <PopoverDropdown>
                <Stack gap="md">
                    <TextInput onChange={(event) => onFilter(event.target.value)} />
                    <Button onClick={onClear}>Clear</Button>
                </Stack>
            </PopoverDropdown>
        </Popover>
    )
}