import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Script from "./index.jsx";

vi.mock("@/hooks/useScenario", () => ({
  useCurrentScenario: () => ({ script: 'print("hello")' }),
}));

describe("Script page", () => {
  it("renders buttons and script content", () => {
    render(<Script />);
    expect(screen.getByText(/executable python script/i)).toBeInTheDocument();
    expect(screen.getByText('print("hello")')).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /download script/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /copy script/i })
    ).toBeInTheDocument();
  });
});
