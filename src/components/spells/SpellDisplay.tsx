import {
    Card,
    Title,
    Text,
    Badge,
    Group,
    Stack,
    Divider,
    Box,
    Flex,
    Paper,
} from "@mantine/core";
import { Spell } from "../../model/Spell";

interface SpellDisplayProps {
    spell: Spell;
}

export const SpellDisplay = ({ spell }: SpellDisplayProps) => {
    const formatCastingTime = () => {
        const { type, duration } = spell.castingTime;
        if (duration === 1) {
            return `1 ${type}`;
        }
        return `${duration} ${type}${duration > 1 ? "s" : ""}`;
    };

    const formatRange = () => {
        if (
            spell.range.type === "Self" ||
            spell.range.type === "Touch" ||
            spell.range.type === "Sight" ||
            spell.range.type === "Unlimited"
        ) {
            return spell.range.type;
        }
        return `${spell.range.distance} ${spell.range.type.toLowerCase()}`;
    };

    const formatComponents = () => {
        const components = [];
        if (spell.components.verbal) components.push("V");
        if (spell.components.somatic) components.push("S");
        if (spell.components.material) {
            if (spell.components.materialComponents) {
                components.push(`M (${spell.components.materialComponents})`);
            } else {
                components.push("M");
            }
        }
        return components.join(", ");
    };

    const getSchoolColor = (school: string) => {
        const colors: Record<string, string> = {
            Abjuration: "blue",
            Conjuration: "yellow",
            Divination: "purple",
            Enchantment: "pink",
            Evocation: "red",
            Illusion: "indigo",
            Necromancy: "dark",
            Transmutation: "green",
        };
        return colors[school] || "gray";
    };

    const getLevelColor = (level: string) => {
        if (level === "Cantrip") return "gray";
        const levelNum = parseInt(level);
        if (levelNum <= 3) return "green";
        if (levelNum <= 6) return "yellow";
        return "red";
    };

    return (
        <Card withBorder shadow="sm" radius="md">
            <Stack gap="md">
                {/* Header */}
                <Box>
                    <Title order={2} mb="xs">
                        {spell.name}
                    </Title>
                    <Group gap="xs">
                        <Badge
                            color={getLevelColor(spell.level)}
                            variant="filled"
                        >
                            {spell.level} Level
                        </Badge>
                        <Badge
                            color={getSchoolColor(spell.school)}
                            variant="outline"
                        >
                            {spell.school}
                        </Badge>
                        {spell.ritual && (
                            <Badge color="violet" variant="light">
                                Ritual
                            </Badge>
                        )}
                        {spell.concentration && (
                            <Badge color="orange" variant="light">
                                Concentration
                            </Badge>
                        )}
                    </Group>
                </Box>

                <Divider />

                {/* Spell Stats */}
                <Paper p="sm" radius="sm">
                    <Stack gap="xs">
                        <Flex justify="space-between">
                            <Text fw={500}>Casting Time:</Text>
                            <Text>{formatCastingTime()}</Text>
                        </Flex>
                        <Flex justify="space-between">
                            <Text fw={500}>Range:</Text>
                            <Text>{formatRange()}</Text>
                        </Flex>
                        <Flex justify="space-between">
                            <Text fw={500}>Components:</Text>
                            <Text>{formatComponents()}</Text>
                        </Flex>
                        <Flex justify="space-between">
                            <Text fw={500}>Duration:</Text>
                            <Text>
                                {spell.concentration ? "Concentration, " : ""}
                                {spell.duration}
                            </Text>
                        </Flex>
                    </Stack>
                </Paper>

                {/* Classes */}
                {spell.classes.length > 0 && (
                    <Box>
                        <Text fw={500} mb="xs">
                            Classes:
                        </Text>
                        <Group gap="xs">
                            {spell.classes.map((className) => (
                                <Badge
                                    key={className}
                                    variant="light"
                                    color="teal"
                                >
                                    {className}
                                </Badge>
                            ))}
                        </Group>
                    </Box>
                )}

                <Divider />

                {/* Description */}
                <Box>
                    <Stack gap="sm">
                        {spell.description.map((entry, index) => (
                            <Box key={index}>
                                {entry.title && (
                                    <Text fw={600} mb="xs">
                                        {entry.title}
                                    </Text>
                                )}
                                <Text>{entry.text}</Text>
                            </Box>
                        ))}
                    </Stack>
                </Box>

                {/* Higher Level */}
                {spell.higherLevel && (
                    <>
                        <Divider />
                        <Box>
                            <Text fw={600} mb="xs">
                                At Higher Levels
                            </Text>
                            <Text>{spell.higherLevel}</Text>
                        </Box>
                    </>
                )}
            </Stack>
        </Card>
    );
};
