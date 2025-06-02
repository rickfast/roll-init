import { Button, Fieldset, PasswordInput, Stack, TextInput } from "@mantine/core";
import { store } from "../model/store";
import { Form, useForm } from "@mantine/form";
import { Config } from "../model/Config";
import { useContext } from "react";
import { Context } from "../model/Context";

export const AdminPanel = () => {
    const { apiKey, setApiKey, save } = useContext(Context);

    const form = useForm<Config>({
        initialValues: {
            apiKey
        }
    });

    return (
        <Stack gap="md">
            <Form form={form}>
                <Stack gap="md">
                    <Fieldset legend="OpenAI Configuration">
                        <PasswordInput label="OpenAI API Key" placeholder="sk-..." {...form.getInputProps('apiKey')} required />
                    </Fieldset>
                    <Button disabled={!form.values.apiKey}
                        type="submit"
                        onClick={() => {
                            setApiKey(form.values.apiKey!);
                            save();
                        }}
                    >Save</Button>
                </Stack>
            </Form>
            <Button onClick={() => {
                store.save({
                    bestiary: {},
                    tracker: { combatants: [], selected: 0 }
                });
            }}>
                Clear Data
            </Button>
        </Stack>
    );
}