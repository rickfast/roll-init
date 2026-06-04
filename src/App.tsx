"use client";

import "@mantine/core/styles.css";
import "@mantine/core/styles.layer.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.layer.css";
import "./layout.css";
import "./components/shell.css";

import {
    AppShell,
    AppShellHeader,
    createTheme,
    Loader,
    MantineProvider,
} from "@mantine/core";
import { ContextProvider } from "./model/Context";
import { InitiativeTracker } from "./components/tracker/InitiativeTracker";
import { StatBlockForm } from "./components/statblock/StatBlockForm";
import { BrowserRouter, Route, Routes } from "react-router";
import { GiBoltSpellCast, GiSpikedDragonHead } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbDatabaseImport } from "react-icons/tb";
import { LuSwords } from "react-icons/lu";
import { NavLink } from "./components/NavLink";
import { PiSparkleDuotone } from "react-icons/pi";
import { ImportScreen } from "./components/import/ImportScreen";
import { Bestiary } from "./components/bestiary/Bestiary";
import { AdminPanel } from "./components/AdminPanel";
import { FaEdit } from "react-icons/fa";
import { Header } from "./components/Header";
import { Notifications } from "@mantine/notifications";
import { RingLoader } from "./components/RingLoader";
import { Spells } from "./components/spells/Spells";
import { CriticalTables } from "./components/crittables/CriticalTables";
import { GiDiceFire } from "react-icons/gi";

const theme = createTheme({
    primaryColor: "orange",
    primaryShade: { light: 6, dark: 5 },
    defaultRadius: "md",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    headings: {
        fontFamily: '"Cinzel", Georgia, serif',
        fontWeight: "600",
    },
    components: {
        Loader: Loader.extend({
            defaultProps: {
                loaders: { ...Loader.defaultLoaders, ring: RingLoader },
                type: "ring",
            },
        }),
    },
});

export default function App() {
    return (
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <Notifications position="bottom-center" />
            <BrowserRouter>
                <ContextProvider>
                    <AppShell
                        header={{ height: 60 }}
                        footer={{ height: 60 }}
                        navbar={{
                            width: 300,
                            breakpoint: "sm",
                            collapsed: { mobile: true },
                        }}
                        padding="md"
                    >
                        <AppShellHeader>
                            <Header />
                        </AppShellHeader>
                        <AppShell.Navbar className="app-navbar" p="md">
                            <div className="nav-section">
                                <div className="nav-section-label">Combat</div>
                                <NavLink
                                    label="Initiative Tracker"
                                    href="/track"
                                    key="Initiative Tracker"
                                    icon={<LuSwords />}
                                />
                            </div>
                            <div className="nav-section">
                                <div className="nav-section-label">Create</div>
                                <NavLink
                                    label="Stat Block Editor"
                                    href="/statblock"
                                    key="Edit Stat Block"
                                    icon={<FaEdit />}
                                />
                                <NavLink
                                    label="Stat Block Generator"
                                    href="/generate"
                                    key="Generate Stat Block"
                                    icon={<PiSparkleDuotone />}
                                />
                            </div>
                            <div className="nav-section">
                                <div className="nav-section-label">
                                    Reference
                                </div>
                                <NavLink
                                    label="Bestiary"
                                    href="/bestiary"
                                    key="Bestiary"
                                    icon={<GiSpikedDragonHead />}
                                />
                                <NavLink
                                    label="Spells"
                                    href="/spells"
                                    key="Spells"
                                    icon={<GiBoltSpellCast />}
                                />
                                <NavLink
                                    label="Crit Tables"
                                    href="/crittables"
                                    key="Crit Tables"
                                    icon={<GiDiceFire />}
                                />
                            </div>
                            <div className="nav-section">
                                <div className="nav-section-label">Manage</div>
                                <NavLink
                                    label="Import Bestiary"
                                    href="/import"
                                    key="Import Bestiary"
                                    icon={<TbDatabaseImport />}
                                />
                                <NavLink
                                    label="Settings"
                                    href="/admin"
                                    key="Settings"
                                    icon={<IoSettingsOutline />}
                                />
                            </div>
                        </AppShell.Navbar>
                        <AppShell.Main>
                            <Routes>
                                <Route index element={<InitiativeTracker />} />
                                <Route
                                    path="/generate"
                                    element={<StatBlockForm />}
                                />
                                <Route
                                    path="/bestiary"
                                    element={<Bestiary />}
                                />
                                <Route
                                    path="/track"
                                    element={<InitiativeTracker />}
                                />
                                <Route
                                    path="/import"
                                    element={<ImportScreen />}
                                />
                                <Route path="/admin" element={<AdminPanel />} />
                                <Route
                                    path="/statblock"
                                    element={
                                        <StatBlockForm aiEnabled={false} />
                                    }
                                />
                                <Route path="/spells" element={<Spells />} />
                                <Route
                                    path="/crittables"
                                    element={<CriticalTables />}
                                />
                            </Routes>
                        </AppShell.Main>
                    </AppShell>
                </ContextProvider>
            </BrowserRouter>
        </MantineProvider>
    );
}
