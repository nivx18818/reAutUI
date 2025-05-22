import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import TestSteps from "./index.jsx";

// mock useCurrentScenario hook
vi.mock("@/hooks/useScenario", () => ({
  useCurrentScenario: () => ({
    parsedActionList: [
      { type: "FILL", description: "field1" },
      { type: "CLICK", description: "btn" },
    ],
  }),
}));

describe("TestSteps component", () => {
  it("renders add data button and input for fill actions", () => {
    const mockAdd = vi.fn();
    render(<TestSteps handleAddTestData={mockAdd} />);
    expect(
      screen.getByRole("button", { name: /add data/i })
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/value for field1 field/i)
    ).toBeInTheDocument();
  });

  it("calls handleAddTestData with form data on submit", async () => {
    const mockAdd = vi.fn();
    render(<TestSteps handleAddTestData={mockAdd} />);
    const input = screen.getByPlaceholderText(/value for field1 field/i);
    await userEvent.type(input, "test value");
    const button = screen.getByRole("button", { name: /add data/i });
    await userEvent.click(button);
    expect(mockAdd).toHaveBeenCalledWith({ field1: "test value" });
  });
});
