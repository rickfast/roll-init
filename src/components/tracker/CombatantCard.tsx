import { ActionIcon, MultiSelect, Popover, Tooltip } from "@mantine/core";
import { FaDiceD20, FaSearch } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { LuLockKeyhole, LuLockOpen, LuShield, LuSword } from "react-icons/lu";
import { Combatant } from "../../model/Combatant";
import { conditionOptions } from "../../model/Condition";
import { NumberCell } from "./NumberCell";
import { ClickInput } from "./ClickInput";
import { Saves } from "./Saves";
import { DiscriminatorComboBox } from "./DiscriminatorComboBox";
import { DiscriminatorBadge } from "./Discriminator";
import { ConditionDisplay } from "./ConditionDisplay";
import { DeathSaveTracker } from "./DeathSaveTracker";

interface Props {
    combatant: Combatant;
    active: boolean;
    onUpdate: (patch: Partial<Combatant>) => void;
    onDelete: () => void;
    onRoll: () => void;
    onOpenStatBlock: () => void;
}

export const CombatantCard = ({
    combatant,
    active,
    onUpdate,
    onDelete,
    onRoll,
    onOpenStatBlock,
}: Props) => {
    const downed = combatant.hp <= 0;

    return (
        <div
            className="combatant-card"
            data-active={active}
            data-downed={downed}
        >
            {/* initiative token */}
            <Tooltip label="Click to set initiative" openDelay={400}>
                <div className="init-badge">
                    <span className="init-value">
                        <ClickInput
                            initialValue={combatant.initiative}
                            onChange={(initiative) => onUpdate({ initiative })}
                        />
                    </span>
                    {combatant.initiativeBonus !== undefined && (
                        <span className="init-bonus">
                            {combatant.initiativeBonus >= 0
                                ? `+${combatant.initiativeBonus}`
                                : combatant.initiativeBonus}
                        </span>
                    )}
                </div>
            </Tooltip>

            {/* name + saves */}
            <div className="combatant-id">
                <div className="combatant-name-row">
                    <span className="combatant-name">{combatant.name}</span>
                    {combatant.discriminator && (
                        <DiscriminatorBadge
                            type={combatant.discriminator.type}
                            value={combatant.discriminator.value}
                        />
                    )}
                </div>
                {combatant.statBlock?.savingThrows && (
                    <div className="combatant-saves">
                        <Saves statBlock={combatant.statBlock} />
                    </div>
                )}
            </div>

            {/* hp */}
            <NumberCell
                initialValue={combatant.hp}
                label="HP"
                max={combatant.max}
                tempValue={combatant.tempHp}
                onChange={(hp) => onUpdate({ hp })}
                onChangeTemp={(tempHp) => onUpdate({ tempHp })}
            />

            {/* ac */}
            <div className="ac-cell">
                <span className="ac-glyph">
                    <LuShield size={48} strokeWidth={1.25} />
                </span>
                <span className="ac-value">
                    <ClickInput
                        initialValue={combatant.ac}
                        onChange={(ac) => onUpdate({ ac })}
                    />
                </span>
            </div>

            {/* conditions */}
            <MultiSelect
                data={conditionOptions}
                searchable
                size="sm"
                placeholder={
                    combatant.conditions?.length ? undefined : "None"
                }
                value={combatant.conditions}
                leftSection={
                    combatant.conditions?.length > 0 && (
                        <Popover
                            width={500}
                            position="bottom"
                            withArrow
                            shadow="md"
                        >
                            <Popover.Target>
                                <ActionIcon variant="transparent" size="sm">
                                    <FaSearch />
                                </ActionIcon>
                            </Popover.Target>
                            <Popover.Dropdown>
                                {combatant.conditions && (
                                    <ConditionDisplay
                                        conditions={combatant.conditions}
                                    />
                                )}
                            </Popover.Dropdown>
                        </Popover>
                    )
                }
                onChange={(conditions) => onUpdate({ conditions })}
            />

            {/* actions */}
            <div className="combatant-actions">
                <Tooltip label="Roll initiative" openDelay={300}>
                    <ActionIcon variant="subtle" color="gray" onClick={onRoll}>
                        <FaDiceD20 />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label="View stat block" openDelay={300}>
                    <ActionIcon
                        variant="subtle"
                        color="gray"
                        disabled={!combatant.statBlock}
                        onClick={onOpenStatBlock}
                    >
                        <LuSword />
                    </ActionIcon>
                </Tooltip>

                <div className="action-divider" />

                {combatant.locked ? (
                    <DeathSaveTracker
                        deathSaves={combatant.deathSaves}
                        onChange={(deathSaves) => onUpdate({ deathSaves })}
                    />
                ) : (
                    <Tooltip label="Remove" openDelay={300}>
                        <ActionIcon
                            variant="subtle"
                            color="red"
                            onClick={onDelete}
                        >
                            <RiDeleteBin2Line />
                        </ActionIcon>
                    </Tooltip>
                )}
                <DiscriminatorComboBox
                    onChange={(discriminator) => onUpdate({ discriminator })}
                />
                <Tooltip
                    label={combatant.locked ? "Unlock (PC)" : "Lock (PC)"}
                    openDelay={300}
                >
                    <ActionIcon
                        variant="subtle"
                        color={combatant.locked ? "orange" : "gray"}
                        onClick={() =>
                            onUpdate({ locked: !combatant.locked })
                        }
                    >
                        {combatant.locked ? <LuLockKeyhole /> : <LuLockOpen />}
                    </ActionIcon>
                </Tooltip>
            </div>
        </div>
    );
};
