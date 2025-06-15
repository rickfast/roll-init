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
import { StatBlockDisplay2 } from './StatBlockDisplay2';
import { generateStatBlock } from '../action/ai/generateStatBlock';
import { Context } from '../model/Context';
import { useSearchParams } from 'react-router';
import { showNotification } from '@mantine/notifications';

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
    const [searchParams] = useSearchParams();
    const { addMonster, apiKey, bestiary } = useContext(Context);
    console.log(`API Key: ${apiKey}`);

    let editable = false;

    let initialValues = {
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
    } as StatBlock;

    if (searchParams.get('id')) {
        const monster = bestiary[searchParams.get('id')!];

        if (monster) {
            initialValues = monster;
            editable = true;
        }
    }

    const form = useForm<StatBlock>({
        initialValues,
        validate: {
            name: (value) => (value.length < 1 ? 'Name is required' : null),
            challengeRating: (value) => (value < 0 || value > 30 ? 'Challenge Rating must be between 0 and 30' : null),
            type: (value) => (value.length < 1 ? 'Type is required' : null),

            alignment: (value) => (value.length < 1 ? 'Alignment is required' : null),
            armorClass: (value) => (value < 1 ? 'Armor Class must be at least 1' : null),
            hitPoints: {
                value: (value) => (value < 1 ? 'Hit Points must be at least 1' : null),
                hitDice: (value) => (value.length < 1 ? 'Hit Dice is required' : null),
            },
            speed: (value) => {
                if (!value || value.length === 0) {
                    return 'At least one speed type is required';
                }
                return null;
            }
        }
    });

    const [traits, setTraits] = useState<{ name: string; desc: string }[]>(initialValues.traits || []);
    const [actions, setActions] = useState<{ name: string; desc: string }[]>(initialValues.actions || []);
    const [aiLoading, setAiLoading] = useState(false);
    const [edit, setEdit] = useState(editable);
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

        try {
            const statBlock = await generateStatBlock(
                form.values.name,
                form.values.challengeRating,
                {
                    alignment: form.values.alignment,
                    type: form.values.type,
                },
                { apiKey: apiKey || '' }
            );

            if (statBlock) {
                form.setValues({
                    ...form.values,
                    ...statBlock,
                    traits: statBlock.traits || [],
                    actions: statBlock.actions || [],
                });
                setTraits(statBlock.traits || []);
                setActions(statBlock.actions || []);
            }

            setAiLoading(false);
        } catch (error) {
            showNotification({
                title: 'Error',
                message: 'Failed to generate stat block. Please check your OpenAI API key and try again.',
                color: 'red',
                autoClose: 5000,
            });
        } finally {
            setAiLoading(false);
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
                                        {...form.getInputProps('hitPoints.value')} 
                                        required />
                                    <TextInput
                                        label="Hit Dice"
                                        placeholder="e.g., 6d10+2"
                                        {...form.getInputProps('hitPoints.hitDice')} 
                                        required />
                                    <NumberInput
                                        label="Armor Class"
                                        {...form.getInputProps('armorClass')}
                                        min={1}
                                        required
                                    />
                                </Group>

                                <Fieldset legend="Speed" mb="md">
                                    <Stack gap="md">
                                        {form.values.speed?.map((speedEntry, i) => (
                                            <Group key={i} grow>
                                                <TextInput
                                                    label="Type"
                                                    placeholder="e.g., walk, fly, swim"
                                                    value={speedEntry.type}
                                                    onChange={(e) => {
                                                        const updatedSpeed = [...form.values.speed];
                                                        updatedSpeed[i] = { ...updatedSpeed[i], type: e.currentTarget.value };
                                                        form.setFieldValue('speed', updatedSpeed);
                                                    }}
                                                />
                                                <TextInput
                                                    label="Speed"
                                                    placeholder="e.g., 30 ft."
                                                    value={speedEntry.speed}
                                                    onChange={(e) => {
                                                        const updatedSpeed = [...form.values.speed];
                                                        updatedSpeed[i] = { ...updatedSpeed[i], speed: e.currentTarget.value };
                                                        form.setFieldValue('speed', updatedSpeed);
                                                    }}
                                                />
                                                <span style={{ width: '100%' }}>
                                                <CloseButton
                                                    onClick={() => {
                                                        const updatedSpeed = form.values.speed.filter((_, index) => index !== i);
                                                        form.setFieldValue('speed', updatedSpeed);
                                                    }}
                                                    disabled={form.values.speed.length === 1}
                                                />
                                                </span>
                                            </Group>
                                        ))}
                                        <Button
                                            onClick={() => {
                                                const currentSpeed = form.values.speed || [];
                                                form.setFieldValue('speed', [...currentSpeed, { type: '', speed: '' }]);
                                            }}
                                        >
                                            Add Speed Type
                                        </Button>
                                    </Stack>
                                </Fieldset>

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
                                showNotification({
                                    title: 'Monster Added',
                                    message: `${form.values.name} has been added to the bestiary.`,
                                    color: 'green',
                                    autoClose: 3000
                                });
                            }} disabled={!form.isValid()}>Save Stat Block</Button>
                            {aiEnabled && <Button loading={aiLoading} onClick={generate} disabled={!form.values.name && !form.values.challengeRating}>Generate with AI</Button>}
                            {aiEnabled && <Button onClick={() => setEdit(!edit)}>Edit Stat Block</Button>}
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        {<StatBlockDisplay2 statBlock={form.values} loading={aiLoading} />}
                    </Grid.Col>
                </Grid>
            </form>
        </Box>
    );
}
