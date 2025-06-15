import { NavLink as RouterLink } from "react-router";
import { NavLink as MantineNavLink } from "@mantine/core";

interface Props {
    label: string;
    href: string;
    icon: React.ReactNode;
    onClick: () => void;
}

export const NavLink = ({ href, label, icon, onClick = () => {} }: Props) =>
    <MantineNavLink
        onClick={onClick}
        href={href}
        renderRoot={(props) => <RouterLink to={href} {...props} />}
        label={label}
        leftSection={icon} />


