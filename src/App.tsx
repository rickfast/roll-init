"use client";

import "@mantine/core/styles.css";
import "@mantine/core/styles.layer.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.layer.css";
import "./layout.css";

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

const theme = createTheme({
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
                        styles={{
                            header: {
                                fontFamily: "Centra No2 Book",
                            },
                        }}
                    >
                        <AppShellHeader>
                            <Header />
                        </AppShellHeader>
                        <AppShell.Navbar p="md">
                            <NavLink
                                label="Initiative Tracker"
                                href="/track"
                                key="Initiative Tracker"
                                icon={<LuSwords />}
                            />
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
                            </Routes>
                        </AppShell.Main>
                    </AppShell>
                </ContextProvider>
            </BrowserRouter>
        </MantineProvider>
    );
}
