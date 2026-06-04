import { Button, Group, PasswordInput, Stack, Text } from "@mantine/core";
import { store } from "../model/store";
import { Form, useForm } from "@mantine/form";
import { Config } from "../model/Config";
import { useContext } from "react";
import { Context } from "../model/Context";
import { PiFloppyDiskBold, PiKeyDuotone } from "react-icons/pi";
import { RiDeleteBin2Line } from "react-icons/ri";
import "./forms.css";

export const AdminPanel = () => {
    const { apiKey, setApiKey, save } = useContext(Context);

    const form = useForm<Config>({
        initialValues: {
            apiKey,
        },
    });

    return (
        <Stack gap="lg" maw={620}>
            <div className="page-head">
                <h1 className="page-title">Settings</h1>
                <div className="page-subtitle">
                    Configure integrations and manage your saved data.
                </div>
            </div>

            <Form form={form}>
                <div className="form-panel">
                    <Stack gap="sm">
                        <Text
                            fw={600}
                            style={{
                                fontFamily: '"Cinzel", Georgia, serif',
                                color: "var(--ember)",
                                letterSpacing: 0.5,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            <PiKeyDuotone /> OpenAI
                        </Text>
                        <Text size="xs" c="dimmed">
                            Required for AI stat block generation. Your key is
                            stored locally.
                        </Text>
                        <PasswordInput
                            variant="filled"
                            label="API Key"
                            placeholder="sk-..."
                            {...form.getInputProps("apiKey")}
                            required
                        />
                        <Group justify="flex-end">
                            <Button
                                disabled={!form.values.apiKey}
                                type="submit"
                                leftSection={<PiFloppyDiskBold />}
                                onClick={() => {
                                    setApiKey(form.values.apiKey!);
                                    save();
                                }}
                            >
                                Save
                            </Button>
                        </Group>
                    </Stack>
                </div>
            </Form>

            <div
                className="form-panel"
                style={{ borderTopColor: "var(--mantine-color-red-6)" }}
            >
                <Stack gap="sm">
                    <Text
                        fw={600}
                        style={{
                            fontFamily: '"Cinzel", Georgia, serif',
                            color: "var(--mantine-color-red-5)",
                            letterSpacing: 0.5,
                        }}
                    >
                        Danger Zone
                    </Text>
                    <Text size="xs" c="dimmed">
                        Permanently clears your bestiary and tracker. This
                        cannot be undone.
                    </Text>
                    <Group justify="flex-end">
                        <Button
                            variant="outline"
                            color="red"
                            leftSection={<RiDeleteBin2Line />}
                            onClick={() => {
                                store.save({
                                    bestiary: {},
                                    tracker: { combatants: [], selected: 0 },
                                });
                            }}
                        >
                            Clear Data
                        </Button>
                    </Group>
                </Stack>
            </div>
        </Stack>
    );
};
