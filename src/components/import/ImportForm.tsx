"use client";

import { showNotification } from "@mantine/notifications";
import { Button, FileInput, Stack, Text } from "@mantine/core";
import { TbDatabaseImport } from "react-icons/tb";
import { GiSpikedDragonHead, GiBoltSpellCast } from "react-icons/gi";

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

    const icon =
        label === "Spells" ? <GiBoltSpellCast /> : <GiSpikedDragonHead />;

    return (
        <form>
            <div className="form-panel" style={{ marginBottom: 16 }}>
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
                        {icon} {label}
                    </Text>
                    <Text size="xs" c="dimmed">
                        Drop in a 5e Tools {label.toLowerCase()} JSON file to
                        import.
                    </Text>
                    <FileInput
                        variant="filled"
                        key={`${label}-input`}
                        leftSection={<TbDatabaseImport />}
                        placeholder={`5e Tools ${label} File`}
                        onChange={(payload) => onFileChange(payload!)}
                    />
                    <Button
                        key={`${label}-save`}
                        leftSection={<TbDatabaseImport />}
                        onClick={() => onSave(label)}
                    >
                        Import {label}
                    </Button>
                </Stack>
            </div>
        </form>
    );
};
