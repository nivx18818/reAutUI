import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router";
import { ScenarioContext } from "@/contexts/ScenarioContext";
import Scenario from "./index.jsx";

describe("Scenario page", () => {
  const mockContext = {
    scenarios: [],
    currentScenarioId: 1,
    setScenarios: () => {},
    setCurrentScenarioId: () => {},
    updateScenarioInContext: () => {},
    isLoading: false,
    setIsLoading: () => {},
  };

  it("renders form inputs and button", () => {
    render(
      <ScenarioContext.Provider value={mockContext}>
        <MemoryRouter>
          <Scenario />
        </MemoryRouter>
      </ScenarioContext.Provider>
    );

    expect(
      screen.getByPlaceholderText(/Enter your web URL/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter detailed description of the scenario/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
