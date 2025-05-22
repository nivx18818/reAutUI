import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScenarioContext } from "@/contexts/ScenarioContext";
import useScenario, { useCurrentScenario } from "./useScenario";

describe("useScenario hook", () => {
  it("throws error when used outside provider", () => {
    expect(() => renderHook(() => useScenario())).toThrowError(
      "useScenario must be used within a ScenarioProvider."
    );
  });

  it("returns context value when used inside provider", () => {
    const contextValue = {
      foo: "bar",
      scenarios: [{ id: 1 }],
      currentScenarioId: 1,
    };
    const wrapper = ({ children }) => (
      <ScenarioContext.Provider value={contextValue}>
        {children}
      </ScenarioContext.Provider>
    );
    const { result } = renderHook(() => useScenario(), { wrapper });
    expect(result.current).toBe(contextValue);
  });

  it("useCurrentScenario returns matching scenario", () => {
    const scenarios = [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ];
    const contextValue = { scenarios, currentScenarioId: 2 };
    const wrapper = ({ children }) => (
      <ScenarioContext.Provider value={contextValue}>
        {children}
      </ScenarioContext.Provider>
    );
    const { result } = renderHook(() => useCurrentScenario(), { wrapper });
    expect(result.current).toEqual(scenarios[1]);
  });
});
