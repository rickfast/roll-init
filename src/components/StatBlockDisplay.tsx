import React from 'react';
import {
    Title,
    Text,
    Group,
    Badge,
    Table,
    Divider,
    Stack,
    Box,
    Skeleton,
    Card
} from '@mantine/core';
import { StatBlock } from '../model/StatBlock';

type Props = {
    statBlock: StatBlock;
    loading?: boolean;
};

function modifier(abilityScore: number): string {
    const mod = Math.floor((abilityScore - 10) / 2);
    return mod == 0 ? '' : mod >= 0 ? ` (+${mod})` : ` (${mod})`;
}

export const StatBlockDisplay: React.FC<Props> = ({ statBlock, loading }) => {
    const {
        name,
        size,
        type,
        alignment,
        armorClass,
        hitPoints,
        speed,
        abilityScores,
        savingThrows,
        damageVulnerabilities,
        damageResistances,
        damageImmunities,
        conditionImmunities,
        senses,
        languages,
        challengeRating,
        traits,
        actions,
    } = statBlock;

    const renderAbilities = () => (
        <Table striped withColumnBorders>
            <thead>
                <tr>
                    <th>STR</th>
                    <th>DEX</th>
                    <th>CON</th>
                    <th>INT</th>
                    <th>WIS</th>
                    <th>CHA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {(['str', 'dex', 'con', 'int', 'wis', 'cha'] as const).map((key) => (
                        <td align='center' key={key}>{abilityScores[key]}{modifier(abilityScores[key])}</td>
                    ))}
                </tr>
            </tbody>
        </Table>
    );

    const display = name && hitPoints && speed && abilityScores && savingThrows;

    if (loading) {
        return <Stack gap={'xs'}>
            <Skeleton height={40} width="100%" />
            <Skeleton height={20} width="30%" />
            <Skeleton height={20} width="30%" />
            <Skeleton height={20} width="30%" />
        </Stack>
    }

    if (!display) {
        return <></>;
    }

    return (
        <Card withBorder shadow="sm" radius="md">
            <Stack gap="xs">
                <Title order={2}>{name}</Title>
                <Text>{`${size} ${type}, ${alignment}`}</Text>
                <Divider />
                <Group gap="md">
                    <Text><strong>AC:</strong> {armorClass}</Text>
                    <Text><strong>HP:</strong> {hitPoints.value} ({hitPoints.hitDice})</Text>
                    <Text><strong>Speed:</strong> {speed.map(s => `${s.type} ${s.speed}`).join(', ')}</Text>
                </Group>

                <Divider label="Ability Scores" labelPosition="center" />
                {renderAbilities()}

                <Group gap="md" grow>
                    <Text><strong>Saving Throws:</strong>&nbsp;
                        {Object.entries(savingThrows).filter(([_, value]) => value)
                            .map(([key, value]) => (
                                value && `${key.toUpperCase()} ${value > 0 ? `+${value}` : `${value}`}`
                            )).join(', ')}
                    </Text>
                </Group>

                <Divider label="Defenses" labelPosition="center" />
                <Group gap="xs" grow>
                    {damageVulnerabilities.length > 0 && (
                        <Badge color="red" variant="outline">Vulnerable: {damageVulnerabilities.join(', ')}</Badge>
                    )}
                    {damageResistances.length > 0 && (
                        <Badge color="yellow" variant="outline">Resistant: {damageResistances.join(', ')}</Badge>
                    )}
                    {damageImmunities.length > 0 && (
                        <Badge color="blue" variant="outline">Immune: {damageImmunities.join(', ')}</Badge>
                    )}
                    {conditionImmunities.length > 0 && (
                        <Badge color="gray" variant="outline">Condition Immunities: {conditionImmunities.join(', ')}</Badge>
                    )}
                </Group>

                <Divider labelPosition="center" />
                <Group gap="md">
                    {senses && <Text><strong>Senses:</strong> {senses}</Text>}
                    <Text><strong>Languages:</strong> {languages.join(', ')}</Text>
                    <Text><strong>CR:</strong> {challengeRating}</Text>
                </Group>

                <Divider />
                {traits.map((trait, idx) => (
                    <Box key={idx}>
                        <Text><b>{trait.name}</b> {trait.desc}</Text>
                    </Box>
                ))}

                <Divider label="Actions" labelPosition="center" />
                {actions.map((action, idx) => (
                    <Box key={idx}>
                        <Text><b>{action.name}</b> {action.desc}</Text>
                    </Box>
                ))}
            </Stack>
        </Card>
    );
};
