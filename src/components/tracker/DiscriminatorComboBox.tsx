import { ActionIcon, Combobox, useCombobox } from "@mantine/core";
import { DiscriminatorBadge } from "./Discriminator";
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { Discriminator } from "../../model/Combatant";

const DISCRIMINATORS: Discriminator[] = [
    { type: "color", value: "red" },
    { type: "color", value: "orange" },
    { type: "color", value: "yellow" },
    { type: "color", value: "green" },
    { type: "color", value: "blue" },
    { type: "color", value: "purple" },
    { type: "color", value: "pink" },
    { type: "color", value: "brown" },
    { type: "color", value: "gray" },
    { type: "number", value: 1 },
    { type: "number", value: 2 },
    { type: "number", value: 3 },
    { type: "number", value: 4 },
    { type: "number", value: 5 },
    { type: "number", value: 6 },
    { type: "number", value: 7 },
    { type: "number", value: 8 },
    { type: "number", value: 9 },
];
const MAPPING = new Map<string, Discriminator>(
    DISCRIMINATORS.map((discriminator) => [
        discriminator.value.toString(),
        discriminator,
    ])
);

interface Props {
    onChange: (discriminator: Discriminator) => void;
}

export const DiscriminatorComboBox = ({ onChange }: Props) => {
    const combobox = useCombobox();

    return (
        <Combobox
            store={combobox}
            width={50}
            position="bottom-start"
            onOptionSubmit={(value) => {
                const discriminator = MAPPING.get(value);
                if (discriminator) {
                    combobox.closeDropdown();
                    onChange(discriminator);
                }
            }}
            withArrow
        >
            <Combobox.Target>
                <ActionIcon
                    variant="outline"
                    onClick={() => combobox.toggleDropdown()}
                    style={{ marginLeft: "4px" }}
                >
                    <PiIdentificationBadgeDuotone />
                </ActionIcon>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>
                    {DISCRIMINATORS.map((discriminator, index) => (
                        <Combobox.Option
                            value={discriminator.value.toString()}
                            key={index}
                        >
                            <DiscriminatorBadge
                                type={discriminator.type}
                                value={discriminator.value}
                            />
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};
