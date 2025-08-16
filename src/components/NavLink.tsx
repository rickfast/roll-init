import { NavLink as RouterLink } from "react-router";
import { NavLink as MantineNavLink } from "@mantine/core";

interface Props {
    label: string;
    href: string;
    icon: React.ReactNode;
}

export const NavLink = ({ href, label, icon }: Props) => (
    <MantineNavLink
        href={href}
        renderRoot={(props) => <RouterLink to={href} {...props} />}
        label={label}
        leftSection={icon}
    />
);
