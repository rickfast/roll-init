import { Combatant } from "../../model/Combatant";
import { ActionIcon, AppShell, Button, Drawer, Group, Tooltip } from "@mantine/core";
import { AddCombatantRow } from "./AddCombatantRow";
import { useContext, useState } from "react";
import { StatBlockDisplay2 } from "../statblock/StatBlockDisplay2";
import { StatBlock } from "../../model/StatBlock";
import { Context } from "../../model/Context";
import { PiCampfireDuotone, PiPlayBold, PiSwordBold } from "react-icons/pi";
import { FaDiceD20, FaSortAmountDown } from "react-icons/fa";
import { showNotification } from "@mantine/notifications";
import { CombatantCard } from "./CombatantCard";
import "./tracker.css";

export const InitiativeTracker = () => {
    const {
        allCombatants,
        selected,
        addCombatant,
        updateCombatant,
        deleteCombatant,
        next,
        rollInitiative,
        rollAllInitiative,
        sort,
        longRest,
    } = useContext(Context);

    const [drawerOpened, setDrawerOpened] = useState(false);
    const [selectedStatBlock, setSelectedStatBlock] =
        useState<StatBlock | null>(null);

    const rows = allCombatants();
    const activeCombatant = rows[selected]?.[1];

    return (
        <>
            <div className="tracker-root">
                <div className="tracker-head">
                    <span className="col-center">Init</span>
                    <span>Name</span>
                    <span className="col-center">Hit Points</span>
                    <span className="col-center">AC</span>
                    <span>Conditions</span>
                    <span>Actions</span>
                </div>

                {rows.map(([id, combatant], index) => (
                    <CombatantCard
                        key={id}
                        combatant={combatant}
                        active={selected === index}
                        onUpdate={(patch) => updateCombatant(id, patch)}
                        onDelete={() => deleteCombatant(id)}
                        onRoll={() => rollInitiative(id)}
                        onOpenStatBlock={() => {
                            if (combatant.statBlock) {
                                setSelectedStatBlock(combatant.statBlock);
                                setDrawerOpened(true);
                            }
                        }}
                    />
                ))}

                <AddCombatantRow
                    onAddCombatant={(
                        combatant: Combatant,
                        quantity: number
                    ) => {
                        addCombatant(combatant, quantity);
                        showNotification({
                            title: "Combatant Added",
                            message: `${combatant.name} added to initiative tracker.`,
                            color: "green",
                            autoClose: 3000,
                        });
                    }}
                />
            </div>
            <AppShell.Footer className="app-footer" p="xs">
                <Group justify="space-between" gap="sm" h="100%" wrap="nowrap">
                    <div className="turn-indicator">
                        <span className="turn-token">
                            <PiSwordBold size={15} />
                        </span>
                        <div className="turn-meta">
                            <span className="turn-label">Current turn</span>
                            {activeCombatant ? (
                                <span className="turn-name">
                                    {activeCombatant.name}
                                </span>
                            ) : (
                                <span className="turn-empty">
                                    No combatants
                                </span>
                            )}
                        </div>
                    </div>
                    <Group gap="sm" wrap="nowrap">
                        <Button
                            variant="default"
                            rightSection={<PiCampfireDuotone />}
                            onClick={() => {
                                longRest();
                                showNotification({
                                    title: "Long Rest",
                                    message:
                                        "All party members have been fully healed.",
                                    color: "green",
                                    autoClose: 3000,
                                });
                            }}
                        >
                            Long Rest
                        </Button>
                        <Button
                            variant="default"
                            rightSection={<FaSortAmountDown />}
                            onClick={sort}
                        >
                            Sort
                        </Button>
                        <Button
                            variant="default"
                            rightSection={<FaDiceD20 />}
                            onClick={rollAllInitiative}
                        >
                            Roll Initiative
                        </Button>
                        <Tooltip label="Next turn" openDelay={300}>
                            <ActionIcon
                                radius="xl"
                                size={42}
                                variant="gradient"
                                gradient={{
                                    from: "orange",
                                    to: "red",
                                    deg: 45,
                                }}
                                onClick={() => {
                                    next();
                                }}
                            >
                                <PiPlayBold />
                            </ActionIcon>
                        </Tooltip>
                    </Group>
                </Group>
            </AppShell.Footer>
            <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                position="right"
                size="xl"
                padding="md"
                overlayProps={{ backgroundOpacity: 0.5 }}
            >
                {selectedStatBlock && (
                    <StatBlockDisplay2 statBlock={selectedStatBlock} />
                )}
            </Drawer>
        </>
    );
};
