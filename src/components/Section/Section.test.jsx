import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Section from "./index";

describe("Section", () => {
  it("renders heading and children", () => {
    render(
      <Section heading="Test Header">
        <div>Content</div>
      </Section>
    );
    expect(screen.getByText("Test Header")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
