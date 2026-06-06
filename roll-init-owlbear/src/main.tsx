import React from "react";
import { createRoot } from "react-dom/client";
import { PluginGate } from "./PluginGate";
import { App } from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PluginGate>
      <App />
    </PluginGate>
  </React.StrictMode>
);
