import { render } from "@testing-library/react";
import { describe, it, vi, beforeEach, afterEach } from "vitest";
import { BrowserRouter } from "react-router";
import ScenarioProvider from "@/contexts/ScenarioContext";
import SidebarProvider from "@/contexts/SidebarContext";
import AppRouter from "./index";

describe("AppRouter", () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <SidebarProvider>
        <ScenarioProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ScenarioProvider>
      </SidebarProvider>
    );
  });
});
