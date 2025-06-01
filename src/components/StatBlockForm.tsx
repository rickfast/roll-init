import { StatBlock } from '../model/StatBlock';
import {
    TextInput,
    NumberInput,
    Select,
    Textarea,
    Button,
    Group,
    Box,
    MultiSelect,
    Divider,
    Stack,
    Card,
    CloseButton,
    Fieldset,
    Grid
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useContext, useState } from 'react';
import { StatBlockDisplay } from './StatBlockDisplay';
import { generateStatBlock } from '../action/ai/generateStatBlock';
import { Context } from '../model/Context';

const sizeOptions = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];
const damageTypes = [
    'acid', 'bludgeoning', 'cold', 'fire', 'force', 'lightning',
    'necrotic', 'piercing', 'poison', 'psychic', 'radiant', 'slashing', 'thunder',
];
const languageOptions = [
    'Common', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling',
    'Orc', 'Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal',
    'Primordial', 'Sylvan', 'Undercommon', 'Aquan', 'Auran', 'Ignan',
    'Terran', 'Telepathy', 'Thieves’ Cant', 'Druidic', 'Any',
];

interface Props {
    aiEnabled?: boolean;
}

export function StatBlockForm({ aiEnabled = true }: Props) {
    const form = useForm<StatBlock>({
        initialValues: {
            name: '',
            size: 'Medium',
            type: '',
            alignment: '',
            armorClass: 0,
            hitPoints: {
                value: 0,
                hitDice: '',
            },
            challengeRating: 0,
            speed: [{ type: 'walk', speed: '30 ft.' }],
            savingThrows: {
                str: 0,
                dex: 0,
                con: 0,
                int: 0,
                wis: 0,
                cha: 0,
            },
            senses: '',
            skills: {},
            spellcasting: undefined,
            subtype: '',
            abilityScores: {
                str: 10,
                dex: 10,
                con: 10,
                int: 10,
                wis: 10,
                cha: 10,
            },
            damageVulnerabilities: [],
            damageResistances: [],
            damageImmunities: [],
            conditionImmunities: [],
            languages: [],
            traits: [],
            actions: [],
        }
    });

    const [traits, setTraits] = useState<{ name: string; desc: string }[]>([]);
    const [actions, setActions] = useState<{ name: string; desc: string }[]>([]);
    const [aiLoading, setAiLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const { addMonster, apiKey } = useContext(Context);

    const addEntry = (setFn: any) => setFn((prev: any) => [...prev, { name: '', desc: '' }]);
    const updateEntry = (setFn: any, index: number, field: string, value: string) =>
        setFn((prev: any[]) => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        });
    const removeEntry = (setFn: any, index: number) =>
        setFn((prev: any[]) => prev.filter((_, i) => i !== index));

    const handleSubmit = () => {
        const finalData = {
            ...form.values,
            traits,
            actions,
        };
        console.log('Stat Block:', finalData);
    };

    const generate = async () => {
        setAiLoading(true);

        const statBlock = await generateStatBlock(
            form.values.name,
            form.values.challengeRating,
            {
                alignment: form.values.alignment,
                type: form.values.type,
            },
            { apiKey: apiKey || '' }
        );

        setAiLoading(false);

        if (statBlock) {
            form.setValues({
                ...form.values,
                ...statBlock,
                traits: statBlock.traits || [],
                actions: statBlock.actions || [],
            });
            setTraits(statBlock.traits || []);
            setActions(statBlock.actions || []);
        } else {
            console.error('Failed to generate stat block');
        }
    }

    return (
        <Box mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Grid>
                    <Grid.Col span={6}>
                        <Stack gap={'md'}>
                            <TextInput label="Name" {...form.getInputProps('name')} required />
                            <NumberInput
                                label="Challenge Rating"
                                {...form.getInputProps('challengeRating')}
                                min={0}
                                max={30}
                                required
                            />

                            {(edit || !aiEnabled) && <>
                                <Group grow>
                                    <Select
                                        label="Size"
                                        data={sizeOptions}
                                        {...form.getInputProps('size')}
                                        required
                                    />
                                    <TextInput label="Type" {...form.getInputProps('type')} required />
                                    <TextInput label="Alignment" {...form.getInputProps('alignment')} />
                                </Group>
                                <Group grow>
                                    <TextInput
                                        label="Hit Points"
                                        placeholder="e.g., 60"
                                        {...form.getInputProps('hitPoints.value')} />
                                    <TextInput
                                        label="Hit Dice"
                                        placeholder="e.g., 6d10+2"
                                        {...form.getInputProps('hitPoints.hitDice')} />
                                    <NumberInput
                                        label="Armor Class"
                                        {...form.getInputProps('armorClass')}
                                        min={1}
                                    />
                                </Group>

                                {/* <Divider label="Ability Scores" /> */}
                                <Fieldset legend="Ability Scores" mb="md">
                                    <Group grow>
                                        {(['str', 'dex', 'con', 'int', 'wis', 'cha'] as const).map((stat) => (
                                            <NumberInput
                                                key={stat}
                                                label={stat.toUpperCase()}
                                                min={1}
                                                max={30}
                                                {...form.getInputProps(`abilityScores.${stat}`)}
                                            />
                                        ))}
                                    </Group>
                                </Fieldset>

                                <MultiSelect
                                    label="Damage Vulnerabilities"
                                    data={damageTypes}
                                    {...form.getInputProps('damageVulnerabilities')}
                                />
                                <MultiSelect
                                    label="Damage Resistances"
                                    data={damageTypes}
                                    {...form.getInputProps('damageResistances')}
                                />
                                <MultiSelect
                                    label="Damage Immunities"
                                    data={damageTypes}
                                    {...form.getInputProps('damageImmunities')}
                                />
                                <MultiSelect
                                    label="Languages"
                                    data={languageOptions}
                                    {...form.getInputProps('languages')}
                                />

                                <Divider label="Traits" />
                                {traits.map((trait, i) => (
                                    <Card key={i} withBorder>
                                        <Group >
                                            <TextInput
                                                label="Name"
                                                value={trait.name}
                                                onChange={(e) => updateEntry(setTraits, i, 'name', e.currentTarget.value)}
                                            />
                                            <CloseButton onClick={() => removeEntry(setTraits, i)} />
                                        </Group>
                                        <Textarea
                                            label="Description"
                                            value={trait.desc}
                                            onChange={(e) => updateEntry(setTraits, i, 'desc', e.currentTarget.value)}
                                        />
                                    </Card>
                                ))}
                                <Button onClick={() => addEntry(setTraits)}>Add Trait</Button>

                                <Divider label="Actions" />
                                {actions.map((action, i) => (
                                    <Card key={i} withBorder>
                                        <Group>
                                            <TextInput
                                                label="Name"
                                                value={action.name}
                                                onChange={(e) => updateEntry(setActions, i, 'name', e.currentTarget.value)}
                                            />
                                            <CloseButton onClick={() => removeEntry(setActions, i)} />
                                        </Group>
                                        <Textarea
                                            label="Description"
                                            value={action.desc}
                                            onChange={(e) => updateEntry(setActions, i, 'desc', e.currentTarget.value)}
                                        />
                                    </Card>
                                ))}
                                <Button onClick={() => addEntry(setActions)}>Add Action</Button>

                                <Divider />
                            </>}
                            <Button type="submit" onClick={() => {
                                addMonster(form.values);                               
                            }} disabled={!form.values.name}>Save Stat Block</Button>
                            { aiEnabled && <Button loading={aiLoading} onClick={generate} disabled={!form.values.name}>Generate with AI</Button> }
                            <Button onClick={() => setEdit(!edit)}>Edit Stat Block</Button>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <StatBlockDisplay statBlock={form.values} loading={aiLoading} />
                    </Grid.Col>
                </Grid>
            </form>
        </Box>
    );
}
