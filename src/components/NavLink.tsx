import { NavLink as RouterLink, useLocation } from "react-router";
import { NavLink as MantineNavLink } from "@mantine/core";

interface Props {
    label: string;
    href: string;
    icon: React.ReactNode;
}

export const NavLink = ({ href, label, icon }: Props) => {
    const { pathname } = useLocation();
    const active =
        pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
        <MantineNavLink
            href={href}
            renderRoot={(props) => <RouterLink to={href} {...props} />}
            label={label}
            leftSection={icon}
            active={active}
            color="orange"
            variant="light"
        />
    );
};
