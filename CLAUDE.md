# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Roll Initiative is a D&D 5th Edition combat management desktop app built with Tauri v2 (Rust backend) + React + TypeScript + Vite. It provides an initiative tracker, bestiary manager, stat block editor/generator, and spell reference.

There is also an untracked `roll-init-native/` directory containing an Expo/React Native mobile port (separate from the main Tauri app).

## Commands

- **Dev (full Tauri app):** `npm run tauri dev` — starts Vite dev server + Rust backend
- **Dev (frontend only):** `npm run dev` — Vite on `localhost:1420`
- **Build:** `npm run tauri build` — production build with Rust compilation
- **Type check + bundle frontend:** `npm run build` (`tsc && vite build`)

No test framework is currently configured.

## Architecture

### Frontend (src/)

- **UI framework:** Mantine v8 (dark theme default), mantine-datatable, react-icons
- **Routing:** react-router v7 with `BrowserRouter` — routes defined in `App.tsx`
- **State:** Single `ViewModel` (React hooks) created in `useViewModel.ts`, distributed via React Context (`model/Context.tsx`). No external state library.
- **Persistence:** `model/store/index.ts` reads/writes `~/save.json` via `@tauri-apps/plugin-fs`. Auto-saves on state changes to bestiary, combatants, spells, and API key.

### Key data flow

- `Context.tsx` loads `save.json` on mount, hydrates the ViewModel
- ViewModel manages: combatants (Map<string, Combatant>), bestiary (dict of StatBlock), spells, OpenAI API key
- Changes trigger auto-save back to `~/save.json`

### Data models (src/model/)

- `StatBlock.ts` — D&D 5e creature stat block (AC, HP, abilities, actions, etc.)
- `Combatant.ts` — runtime combat state (initiative, HP, conditions, death saves); `fromStatBlock()` creates one from a StatBlock
- `Spell.ts` — spell data
- `Condition.ts` / `data.tsx` — D&D condition list

### Features

- **Initiative Tracker** (`components/tracker/`) — combat management with initiative rolls, HP tracking, conditions, death saves, long rest
- **Bestiary** (`components/bestiary/`) — browse/search stored creatures
- **Stat Block Editor/Generator** (`components/statblock/`) — manual editing or AI generation via OpenAI (`action/ai/generateStatBlock.ts` uses gpt-4o with structured output)
- **Import** (`action/import/`) — imports 5etools JSON format bestiary/spells, sanitizes `{@token value}` markup
- **Spells** (`components/spells/`) — spell browser

### Backend (src-tauri/)

Minimal Rust/Tauri shell — `lib.rs` just initializes the Tauri app with `tauri-plugin-fs` and `tauri-plugin-opener`. All business logic is in the frontend.

## Import System

The importer (`action/import/import.ts`) converts 5etools JSON format to the app's StatBlock/Spell models. It filters to specific source books (currently `XMM` — Monster Manual 2024) and sanitizes 5etools `{@token value}` markup into plain text.
