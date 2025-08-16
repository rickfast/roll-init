"use client";

import { showNotification } from "@mantine/notifications";
import { Button, Fieldset, FileInput, Stack } from "@mantine/core";

interface Props {
    importer: (json: string) => string;
    onJsonRead: (json: string) => void;
    onSave: (label: string) => void;
    label: string;
}

export const ImportForm = ({ importer, onJsonRead, onSave, label }: Props) => {
    const onFileChange = (file: File) => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        file.text().then((text) => {
            try {
                const parsedJson = JSON.parse(text);
                const json = JSON.stringify(parsedJson, null, 2);
                const jsonAsString = importer(json);

                onJsonRead(jsonAsString);
            } catch (error) {
                showNotification({
                    title: "Error",
                    message: `Failed to parse JSON file. Please ensure it is a valid 5e Tools file. ${error}`,
                    color: "red",
                });
            }
        });
    };

    return (
        <form>
            <Fieldset name={`${label.toLowerCase()}-form`} legend={label}>
                <Stack gap="md">
                    <FileInput
                        key={`${label}-input`}
                        placeholder={`5e Tools ${label} File`}
                        onChange={(payload) => onFileChange(payload!)}
                    />
                    <Button key={`${label}-save`} onClick={() => onSave(label)}>
                        Save
                    </Button>
                </Stack>
            </Fieldset>
        </form>
    );
};
