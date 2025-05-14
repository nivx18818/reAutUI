import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./components/ThemeProvider";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
