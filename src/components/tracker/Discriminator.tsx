import { Badge } from "@mantine/core";
import { Discriminator } from "../../model/Combatant";

export const DiscriminatorBadge = ({ type, value }: Discriminator) => {
    return type === "color" ? (
        <Badge
            size="xs"
            variant="filled"
            // @ts-ignore
            color={value}
            styles={{ root: { paddingTop: 11 } }}
        />
    ) : (
        <strong>{value.toString()}</strong>
    );
};
