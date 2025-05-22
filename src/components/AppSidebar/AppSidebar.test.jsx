import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, it, vi } from "vitest";
import ScenarioProvider from "@/contexts/ScenarioContext";
import SidebarProvider from "@/contexts/SidebarContext";
import AppSidebar from "./index";

describe("AppSidebar", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
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
          <AppSidebar className="test-class" handleScenarioChange={() => {}} />
        </ScenarioProvider>
      </SidebarProvider>
    );
  });
});
