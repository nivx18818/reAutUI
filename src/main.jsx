import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import { TooltipProvider } from "./components/ui/tooltip.jsx";
import "./globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider defaultOpen={false}>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </SidebarProvider>
  </StrictMode>
);
