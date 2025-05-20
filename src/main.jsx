import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter";
import ScenarioProvider from "./contexts/ScenarioContext";
import SidebarProvider from "./contexts/SidebarContext";
import "./globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider defaultOpen={false}>
      <ScenarioProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ScenarioProvider>
    </SidebarProvider>
  </StrictMode>
);
