import { Pill } from '@mantine/core';
import { AbilityScores, SavingThrows, StatBlock } from '../../model/StatBlock';

interface Props {
    statBlock: StatBlock;
}
export const Saves = ({ statBlock }: Props) => {
    const { savingThrows, abilityScores } = statBlock;
    const saves: SavingThrows = Object.entries(savingThrows).reduce((acc: any, [key, value]) => {
        const abilityScore = abilityScores[key as keyof AbilityScores];
        if (abilityScore !== undefined) {
            acc[key] = value + Math.floor((abilityScore - 10) / 2);
        }
        return acc;
    }, {} as SavingThrows)

    return (
        <span>
            {Object.entries(saves).filter(([_, value]) => value !== 0)
                .map(([key, value]) => (
                    <Pill key={key}>
                        {key.toUpperCase()} {value >= 0 ? `+${value}` : value}
                    </Pill>
                ))}
        </span>
    );
}