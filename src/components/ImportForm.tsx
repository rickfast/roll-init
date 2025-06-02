'use client';

import { Box, Button, FileInput, Grid, Stack } from "@mantine/core"
import { CodeHighlight, CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';
import React, { useContext, useState } from "react";
import { importBestiary } from "../action/import/import";
import { Context } from "../model/Context";
import { showNotification } from '@mantine/notifications';

async function loadShiki() {
    const { createHighlighter } = await import('shiki');
    const shiki = await createHighlighter({
        langs: ['tsx', 'scss', 'html', 'bash', 'json'],
        themes: [],
    });

    return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

export const ImportForm = () => {
    const [json, setJson] = React.useState<any>(null);
    const [loading, setLoading] = useState(false);
    const { importMonsters } = useContext(Context);
    
    const onSave = () => {
        setLoading(true);

        if (!json) {
            console.error('No JSON to save');
            setLoading(false);
            return;
        }

        importMonsters(JSON.parse(json));
        setLoading(false);
        showNotification({ message: 'Bestiary successfully imported.' });
    }

    const onFileChange = (file: File) => {
        if (!file) {
            console.error('No file selected');
            return;
        }

        file.text()
            .then((text) => {
                try {
                    const parsedJson = JSON.parse(text);
                    const bestiaryJson = JSON.stringify(parsedJson, null, 2);
                    const monsters = importBestiary(bestiaryJson);

                    setJson(monsters);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    setJson('Invalid JSON format');
                }
            });
    }

    return (
        <Box mx="auto">
            <CodeHighlightAdapterProvider adapter={shikiAdapter}>
                <Grid>
                    <Grid.Col span={6}>
                        <Stack gap="md">
                            <FileInput placeholder={"5e Tools Bestiary File"} onChange={(payload) => onFileChange(payload!)} />
                            <Button disabled={!json} loading={loading} onClick={onSave}>Save</Button>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        {json && <CodeHighlight language="json" style={{ height: '100%' }} code={json} />}
                    </Grid.Col>
                </Grid>
            </CodeHighlightAdapterProvider>
        </Box >
    );
};