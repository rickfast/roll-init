'use client';

import { Box, Grid } from "@mantine/core"
import { CodeHighlight, CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';
import React, { useContext } from "react";
import { importBestiary, importSpells } from "../../action/import/import";
import { Context } from "../../model/Context";
import { showNotification } from '@mantine/notifications';
import { ImportForm } from "./ImportForm";

async function loadShiki() {
    const { createHighlighter } = await import('shiki');
    const shiki = await createHighlighter({
        langs: ['tsx', 'scss', 'html', 'bash', 'json'],
        themes: [],
    });

    return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

export const ImportScreen = () => {
    const [json, setJson] = React.useState<any>(null);
    const context = useContext(Context);

    const onSave = (label: string, importer: (obj: any) => void) => {
        if (!json) {
            console.error('No JSON to save');
            return;
        }

        importer(JSON.parse(json));
        
        showNotification({
            title: 'Import Successful',
            message: `${label} has been successfully imported.`,
            color: 'green',
        });
    }

    return (
        <Box mx="auto">
            <CodeHighlightAdapterProvider adapter={shikiAdapter}>
                <Grid>
                    <Grid.Col span={6}>
                        <ImportForm 
                            key="import-bestiary"
                            importer={importBestiary}
                            onJsonRead={setJson}
                            onSave={(label) => onSave(label, context.importMonsters)}
                            label="Bestiary"
                        />
                        <ImportForm 
                            key="import-spells"
                            importer={importSpells}
                            onJsonRead={setJson}
                            onSave={(label) => onSave(label, context.importSpells)}
                            label="Spells"
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        {json && <CodeHighlight language="json" style={{ height: '100%' }} code={json} />}
                    </Grid.Col>
                </Grid>
            </CodeHighlightAdapterProvider>
        </Box >
    );
};