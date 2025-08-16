export function pruneEmptyFields<T>(obj: T): T {
    if (Array.isArray(obj)) {
        return obj
            .map(pruneEmptyFields)
            .filter((item) => !isRemovable(item)) as T;
    }

    if (typeof obj === "object" && obj !== null) {
        const result: any = {};
        for (const [key, value] of Object.entries(obj)) {
            const pruned = pruneEmptyFields(value);
            if (!isRemovable(pruned)) {
                result[key] = pruned;
            }
        }
        return result;
    }

    return obj;
}

function isRemovable(value: any): boolean {
    if (value === 0) return true;
    if (value === "") return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (
        typeof value === "object" &&
        value !== null &&
        Object.keys(value).length === 0
    )
        return true;
    return false;
}
