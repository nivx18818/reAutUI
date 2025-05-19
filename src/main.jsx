import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SidebarProvider from "./contexts/SidebarContext";
import ScenarioProvider from "./contexts/ScenarioContext";
import App from "./App";
import "./globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider defaultOpen={false}>
      <ScenarioProvider>
        <App />
      </ScenarioProvider>
    </SidebarProvider>
  </StrictMode>
);
