import { ActionIcon, Modal, Tabs } from "@mantine/core";
import { StatBlock } from "../model/StatBlock"
import { FeatureDisplay } from "./FeatureDisplay";
import { useDisclosure } from "@mantine/hooks";
import { LuSwords } from "react-icons/lu";

interface Props {
    statBlock: StatBlock;
}

export const FeatureModal = ({ statBlock }: Props) => {
    const [opened, { open, close }] = useDisclosure(false);
    const { actions, reactions, legendaryActions, traits } = statBlock;
    return (
        <>
            <ActionIcon variant="outline" onClick={open} style={{ marginLeft: '4px' }}>
                <LuSwords />
            </ActionIcon>
            <Modal opened={opened} onClose={close}>
                <Tabs defaultValue="actions">
                    <Tabs.List>
                        <Tabs.Tab value="actions" disabled={!actions}>Actions</Tabs.Tab>
                        <Tabs.Tab value="reactions" disabled={!reactions}>Reactions</Tabs.Tab>
                        <Tabs.Tab value="legendary" disabled={!legendaryActions}>Legendary Actions</Tabs.Tab>
                        <Tabs.Tab value="traits" disabled={!traits}>Traits</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="traits">
                        <FeatureDisplay features={traits} />
                    </Tabs.Panel>
                    <Tabs.Panel value="actions">
                        <FeatureDisplay features={actions} />
                    </Tabs.Panel>
                    <Tabs.Panel value="reactions">
                        {reactions && <FeatureDisplay features={reactions} />}
                    </Tabs.Panel>
                    <Tabs.Panel value="legendary">
                        {legendaryActions && <FeatureDisplay features={legendaryActions} />}
                    </Tabs.Panel>
                </Tabs>
            </Modal>
        </>
    )
}