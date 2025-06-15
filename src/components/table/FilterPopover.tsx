import { ActionIcon, Popover, PopoverDropdown, PopoverTarget, Stack, TextInput } from "@mantine/core"
import { GoFilter } from "react-icons/go"

interface Props {
    onFilter: (value: string) => void
}

export const FilterPopover = ({ onFilter }: Props) => {
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
                </Stack>
            </PopoverDropdown>
        </Popover>
    )
}