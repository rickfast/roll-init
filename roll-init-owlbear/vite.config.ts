import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Owlbear fetches manifest.json (and assets) cross-origin from its own page,
// so the dev/preview server must send CORS headers allowing the Owlbear origin.
// Recent Vite versions no longer enable permissive CORS by default.
const owlbearOrigin = /^https:\/\/([a-z0-9-]+\.)?owlbear\.rodeo$/;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Stable port so the Owlbear "Add Custom Extension" manifest URL
    // (http://localhost:5173/manifest.json) doesn't change between runs.
    port: 5173,
    cors: { origin: owlbearOrigin },
  },
  preview: {
    port: 5173,
    cors: { origin: owlbearOrigin },
  },
});
