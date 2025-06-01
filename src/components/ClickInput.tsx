import { Input, Text } from "@mantine/core";
import React from "react";

export const ClickInput: React.FC<{
    initialValue: number;
    onChange: (value: number) => void;
}> = ({ initialValue, onChange }) => {
    const [editable, setEditable] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (editable && inputRef.current) {
            inputRef.current.select();
        }
    }, [editable]);

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        if (!isNaN(value)) {
            onChange(value);
        }
    };

    return (
        editable ?
            <Input
                styles={{
                    input: {
                        width: 42
                    }
                }}
                type="number"
                defaultValue={initialValue}
                onBlur={() => {
                    setEditable(false);
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setEditable(false);
                    }
                }}
                onChange={onValueChange}
                autoFocus
                ref={inputRef}
            /> : <Text onClick={() => setEditable(true)}>{initialValue}</Text>
    )
}