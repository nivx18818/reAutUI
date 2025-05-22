import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useCurrentScenario } from "@/hooks/useScenario";
import Locators from "./index";

vi.mock("@/hooks/useScenario", () => ({
  useCurrentScenario: vi.fn(),
}));

describe("Locators page", () => {
  it("renders locator list", () => {
    const mockLocators = [
      { description: "Test1", xpath: "/html" },
      { description: "Test2", xpath: "FALSE" },
    ];
    useCurrentScenario.mockReturnValue({ locatorList: mockLocators });
    render(<Locators />);
    expect(screen.getByText("Test1")).toBeInTheDocument();
    expect(screen.getByText("/html")).toBeInTheDocument();
    expect(screen.getByText("Can't find element locator")).toBeInTheDocument();
  });
});
