import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoadingScreen from "./index";

describe("LoadingScreen", () => {
  it("renders loading status", () => {
    render(<LoadingScreen />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
