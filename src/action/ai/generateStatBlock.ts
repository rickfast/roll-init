import { StatBlock } from "../../model/StatBlock";
import OpenAI from "openai";
import { SCHEMA } from "./schema";

let client: OpenAI;

export async function generateStatBlock(
    name: string,
    cr: number,
    partial: Partial<StatBlock>,
    options: { apiKey: string }
): Promise<StatBlock> {
    console.log("Generating stat block for:", {
        name,
        cr,
        partial: JSON.stringify(partial),
    });

    if (!client || options.apiKey !== client.apiKey) {
        client = new OpenAI({
            apiKey: options.apiKey,
            dangerouslyAllowBrowser: true,
        });
    }

    const response = await client.responses.create({
        model: "gpt-4o",
        instructions: `You are a Dungeons & Dragons 5th Edition stat block generator. Generate a stat block based on the provided prompt. The output must be in JSON format`,
        input: `Generate a stat block for a creature named "${name}" with a challenge rating of ${cr}. Include the following details: ${JSON.stringify(partial)}`,
        text: {
            format: {
                type: "json_schema",
                name: "StatBlock",
                description: "A Dungeons & Dragons 5th Edition stat block",
                schema: SCHEMA,
                strict: true,
            },
        },
    });

    console.log("Received response from OpenAI:", response.output_text);

    return JSON.parse(response.output_text) as StatBlock;
}
