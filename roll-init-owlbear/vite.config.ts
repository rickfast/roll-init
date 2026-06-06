import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Stable port so the Owlbear "Add Custom Extension" manifest URL
    // (http://localhost:5173/manifest.json) doesn't change between runs.
    port: 5173,
  },
});
