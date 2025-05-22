import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import tabs from "@/tabs";
import AppMenubar from "./index";

describe("AppMenubar", () => {
  it("renders menu items", () => {
    render(
      <AppMenubar activeTab={tabs.scenario.path} handleTabChange={() => {}} />
    );
    Object.values(tabs).forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("calls handleTabChange with the correct path on click", () => {
    const handleTabChangeMock = vi.fn();
    render(
      <AppMenubar
        activeTab={tabs.scenario.path}
        handleTabChange={handleTabChangeMock}
      />
    );

    const testDataTab = screen.getByText(tabs.testData.label);
    fireEvent.click(testDataTab);

    expect(handleTabChangeMock).toHaveBeenCalledWith(tabs.testData.path);
  });
});
