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
    SimpleGrid,
    ThemeIcon
} from '@mantine/core';
import { GiShield as IconShield, GiHeartArmor as IconHeart, GiLightningArc as IconBolt } from 'react-icons/gi';
// import { IconShield, IconHeart, IconBolt } from '@tabler/icons-react';
import { StatBlock } from '../../model/StatBlock';

interface StatBlockDisplayProps {
    statBlock: StatBlock;
    loading?: boolean;
}

export const StatBlockDisplay2 = ({ statBlock, loading = false }: StatBlockDisplayProps) => {
    const getModifier = (score: number) => {
        return Math.floor((score - 10) / 2);
    };

    const formatModifier = (modifier: number) => {
        return modifier >= 0 ? `+${modifier}` : `${modifier}`;
    };

    const getSizeColor = (size: string) => {
        const colors: Record<string, string> = {
            'Tiny': 'grape',
            'Small': 'violet',
            'Medium': 'blue',
            'Large': 'cyan',
            'Huge': 'teal',
            'Gargantuan': 'green'
        };
        return colors[size] || 'gray';
    };

    const getCRColor = (cr: number) => {
        if (cr <= 1) return 'green';
        if (cr <= 5) return 'yellow';
        if (cr <= 10) return 'orange';
        return 'red';
    };

    const formatSpeed = () => {
        return statBlock.speed.map(s => `${s.type} ${s.speed}`).join(', ');
    };

    const formatSavingThrows = () => {
        const saves: string[] = [];
        Object.entries(statBlock.savingThrows).forEach(([ability, bonus]) => {
            if (bonus !== 0) {
                saves.push(`${ability.toUpperCase()} ${formatModifier(bonus)}`);
            }
        });
        return saves.length > 0 ? saves.join(', ') : '—';
    };

    const formatSkills = () => {
        if (!statBlock.skills || Object.keys(statBlock.skills).length === 0) return '—';
        return Object.entries(statBlock.skills)
            .map(([skill, bonus]) => `${skill} ${formatModifier(bonus)}`)
            .join(', ');
    };

    if (loading) {
        return (
            <Card withBorder shadow="sm" radius="md" style={{ opacity: 0.6 }}>
                <Text ta="center" c="dimmed">Generating stat block...</Text>
            </Card>
        );
    }

    return (
        <Card withBorder shadow="sm" radius="md">
            <Stack gap="md">
                {/* Header */}
                <Box>
                    <Title order={2} mb="xs">
                        {statBlock.name || 'Unnamed Creature'}
                    </Title>
                    <Text fs="italic" c="dimmed" mb="md">
                        {statBlock.size} {statBlock.type}{statBlock.subtype ? ` (${statBlock.subtype})` : ''}, {statBlock.alignment}
                    </Text>
                    <Group gap="xs">
                        <Badge color={getSizeColor(statBlock.size)} variant="light">
                            {statBlock.size}
                        </Badge>
                        <Badge color={getCRColor(statBlock.challengeRating)} variant="filled">
                            CR {statBlock.challengeRating}
                        </Badge>
                    </Group>
                </Box>

                <Divider size="md" />

                {/* Basic Stats */}
                <Paper p="sm" radius="sm">
                    <SimpleGrid cols={3} spacing="xs">
                        <Flex align="center" gap="xs">
                            <ThemeIcon size={24} color="red" variant="light">
                                <IconShield size={16} />
                            </ThemeIcon>
                            <Box>
                                <Text size="xs" c="dimmed">Armor Class</Text>
                                <Text fw={600}>{statBlock.armorClass}</Text>
                            </Box>
                        </Flex>
                        <Flex align="center" gap="xs">
                            <ThemeIcon size={24} color="green" variant="light">
                                <IconHeart size={16} />
                            </ThemeIcon>
                            <Box>
                                <Text size="xs" c="dimmed">Hit Points</Text>
                                <Text fw={600}>{statBlock.hitPoints.value} ({statBlock.hitPoints.hitDice})</Text>
                            </Box>
                        </Flex>
                        <Flex align="center" gap="xs">
                            <ThemeIcon size={24} color="blue" variant="light">
                                <IconBolt size={16} />
                            </ThemeIcon>
                            <Box>
                                <Text size="xs" c="dimmed">Speed</Text>
                                <Text fw={600}>{formatSpeed()}</Text>
                            </Box>
                        </Flex>
                    </SimpleGrid>
                </Paper>

                <Divider size="sm" />

                {/* Ability Scores */}
                <Box>
                    <Text fw={600} mb="sm" ta="center">Ability Scores</Text>
                    <SimpleGrid cols={6}>
                        {Object.entries(statBlock.abilityScores).map(([ability, score]) => (
                            <Paper key={ability} p="xs" ta="center" radius="sm">
                                <Text size="xs" fw={600} tt="uppercase">{ability}</Text>
                                <Text fw={700}>{score}</Text>
                                <Text size="xs" c="dimmed">({formatModifier(getModifier(score))})</Text>
                            </Paper>
                        ))}
                    </SimpleGrid>
                </Box>

                <Divider size="sm" />

                {/* Additional Stats */}
                <Stack gap="xs">
                    <Flex justify="space-between">
                        <Text fw={600}>Saving Throws:</Text>
                        <Text>{formatSavingThrows()}</Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text fw={600}>Skills:</Text>
                        <Text>{formatSkills()}</Text>
                    </Flex>
                    {statBlock.damageVulnerabilities.length > 0 && (
                        <Flex justify="space-between">
                            <Text fw={600}>Damage Vulnerabilities:</Text>
                            <Text>{statBlock.damageVulnerabilities.join(', ')}</Text>
                        </Flex>
                    )}
                    {statBlock.damageResistances.length > 0 && (
                        <Flex justify="space-between">
                            <Text fw={600}>Damage Resistances:</Text>
                            <Text>{statBlock.damageResistances.join(', ')}</Text>
                        </Flex>
                    )}
                    {statBlock.damageImmunities.length > 0 && (
                        <Flex justify="space-between">
                            <Text fw={600}>Damage Immunities:</Text>
                            <Text>{statBlock.damageImmunities.join(', ')}</Text>
                        </Flex>
                    )}
                    {statBlock.conditionImmunities.length > 0 && (
                        <Flex justify="space-between">
                            <Text fw={600}>Condition Immunities:</Text>
                            <Text>{statBlock.conditionImmunities.join(', ')}</Text>
                        </Flex>
                    )}
                    <Flex justify="space-between">
                        <Text fw={600}>Senses:</Text>
                        <Text>{statBlock.senses || '—'}</Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text fw={600}>Languages:</Text>
                        <Text>{statBlock.languages.length > 0 ? statBlock.languages.join(', ') : '—'}</Text>
                    </Flex>
                </Stack>

                {/* Spellcasting */}
                {statBlock.spellcasting && (
                    <>
                        <Divider size="sm" />
                        <Box>
                            <Text fw={600} mb="xs">Spellcasting</Text>
                            <Text size="sm">
                                Spellcasting ability: {statBlock.spellcasting.ability} (spell save DC {statBlock.spellcasting.saveDc}, 
                                {formatModifier(statBlock.spellcasting.attackBonus)} to hit with spell attacks)
                            </Text>
                        </Box>
                    </>
                )}

                {/* Traits */}
                {statBlock.traits.length > 0 && (
                    <>
                        <Divider size="sm" />
                        <Box>
                            <Text fw={600} mb="sm">Traits</Text>
                            <Stack gap="sm">
                                {statBlock.traits.map((trait, index) => (
                                    <Box key={index}>
                                        <Text fw={600} span>{trait.name}. </Text>
                                        <Text span>{trait.desc}</Text>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </>
                )}

                {/* Actions */}
                {statBlock.actions.length > 0 && (
                    <>
                        <Divider size="sm" />
                        <Box>
                            <Text fw={600} mb="sm">Actions</Text>
                            <Stack gap="sm">
                                {statBlock.actions.map((action, index) => (
                                    <Box key={index}>
                                        <Text fw={600} span>{action.name}. </Text>
                                        <Text span>{action.desc}</Text>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </>
                )}

                {/* Bonus Actions */}
                {statBlock.bonusActions && statBlock.bonusActions.length > 0 && (
                    <>
                        <Divider size="sm" />
                        <Box>
                            <Text fw={600} mb="sm">Bonus Actions</Text>
                            <Stack gap="sm">
                                {statBlock.bonusActions.map((action, index) => (
                                    <Box key={index}>
                                        <Text fw={600} span>{action.name}. </Text>
                                        <Text span>{action.desc}</Text>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </>
                )}

                {/* Reactions */}
                {statBlock.reactions && statBlock.reactions.length > 0 && (
                    <>
                        <Divider size="sm" />
                        <Box>
                            <Text fw={600} mb="sm">Reactions</Text>
                            <Stack gap="sm">
                                {statBlock.reactions.map((reaction, index) => (
                                    <Box key={index}>
                                        <Text fw={600} span>{reaction.name}. </Text>
                                        <Text span>{reaction.desc}</Text>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </>
                )}

                {/* Legendary Actions */}
                {statBlock.legendaryActions && statBlock.legendaryActions.length > 0 && (
                    <>
                        <Divider size="sm" />
                        <Box>
                            <Text fw={600} mb="sm">Legendary Actions</Text>
                            <Stack gap="sm">
                                {statBlock.legendaryActions.map((action, index) => (
                                    <Box key={index}>
                                        <Text fw={600} span>{action.name}. </Text>
                                        <Text span>{action.desc}</Text>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </>
                )}
            </Stack>
        </Card>
    );
};