import { ActionIcon } from "@mantine/core";
import { NavLink } from "react-router";

interface Props {
    icon: React.ReactNode;
    href: string;
}

export const NavActionButton = ({ icon, href }: Props) => {
    return <ActionIcon component={NavLink} to={href} variant="outline">
        {icon}
    </ActionIcon>
};