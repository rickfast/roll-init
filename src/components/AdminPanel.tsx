import { Button, Stack, TextInput } from "@mantine/core";
import { store } from "../model/store";
import { Form, useForm } from "@mantine/form";
import { Config } from "../model/Config";
import { useContext } from "react";
import { Context } from "../model/Context";

export const AdminPanel = () => {
    const form = useForm<Config>({
        initialValues: {
            apiKey: ''
        }
    });
    const { setApiKey, save } = useContext(Context);

    return (
        <Stack gap="md">
            <Form form={form}>
                <TextInput label="OpenAI API Key" placeholder="sk-..." {...form.getInputProps('apiKey')} required />
                <Button disabled={!form.values.apiKey}
                    type="submit"
                    onClick={() => {
                        setApiKey(form.values.apiKey!);
                        save();
                    }}
                >Save</Button>
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