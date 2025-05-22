import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter, Route, Routes } from "react-router";
import { TooltipProvider } from "@/components/ui/tooltip.jsx";
import TestData from "./index.jsx";

const mockScenarioContextValue = {
  updateScenarioInContext: vi.fn(),
  setIsLoading: vi.fn(),
  // Add any other properties/functions your component expects from useScenario
};

const mockCurrentScenarioData = {
  id: "test-id",
  url: "http://example.com",
  dataSetList: [["val1", "val2"]],
  parsedActionList: [{ type: "FILL", description: "field1" }],
  // Add other properties expected by FunctionButtons or other children
  script: "",
  locatorList: [],
};

vi.mock("@/hooks/useScenario", () => ({
  useCurrentScenario: () => mockCurrentScenarioData,
  default: () => mockScenarioContextValue,
}));

describe("TestData page", () => {
  it("renders test data table with headers", () => {
    render(
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TestData />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    );
    expect(screen.getByRole('columnheader', { name: /field1/i })).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
