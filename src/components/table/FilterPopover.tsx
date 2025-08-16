import {
    ActionIcon,
    Button,
    Popover,
    PopoverDropdown,
    PopoverTarget,
    Stack,
    TextInput,
} from "@mantine/core";
import { GoFilter } from "react-icons/go";

interface Props {
    children: React.ReactNode;
}

interface TextFilterProps {
    onFilter: (value: string) => void;
    onClear: () => void;
}

export const TextFilter = ({ onFilter, onClear }: TextFilterProps) => {
    return (
        <FilterPopover>
            <TextInput onChange={(event) => onFilter(event.target.value)} />
            <Button onClick={onClear}>Clear</Button>
        </FilterPopover>
    );
};

export const MultiSelectFilter = ({ onClear }: TextFilterProps) => {
    return (
        <FilterPopover>
            <Button onClick={onClear}>Clear</Button>
        </FilterPopover>
    );
};

export const FilterPopover = ({ children }: Props) => {
    return (
        <Popover>
            <PopoverTarget>
                <ActionIcon variant="subtle">
                    <GoFilter />
                </ActionIcon>
            </PopoverTarget>
            <PopoverDropdown>
                <Stack gap="md">{children}</Stack>
            </PopoverDropdown>
        </Popover>
    );
};
