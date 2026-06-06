# Roll Initiative Sync — Owlbear Rodeo extension

Mirrors the [Roll Initiative](../) desktop tracker onto an Owlbear Rodeo player
display during live games.

## How it works

```
Roll Initiative (Tauri)
  └─ ws://localhost:8787  ──▶  GM window (this extension)
                                 └─ OBR.room.setMetadata(state)
                                      └─ Owlbear syncs the room
                                           └─ Player window renders it
```

- The **GM window** (on the laptop running Roll Initiative) is the only one that
  connects to `localhost` and the only writer of room metadata.
- The **player display** just reads room metadata — it can be a separate device.
- Role is detected with `OBR.player.getRole()`; players never connect to the
  bridge and only see HP numbers for player characters.

## Develop

```sh
npm install
npm run dev          # serves http://localhost:5173
```

Then in Owlbear (GM): **Extensions → Add Custom Extension** and paste
`http://localhost:5173/manifest.json`. Enable it for the room and it loads for
every player in that room automatically. Make sure the Roll Initiative app is
running so the bridge (`ws://localhost:8787`) is live.

## Build

```sh
npm run build        # type-checks + outputs to dist/
npm run preview      # serve the built dist/ on :5173
```

For permanent use, host `dist/` somewhere stable and point the manifest URL
there.
