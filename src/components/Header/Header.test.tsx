import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("should render without crashing", () => {
    render(<Header />);
  });

  it('should display the title "Floral Reads"', () => {
    const { getByText } = render(<Header />);
    const title = getByText("Floral Reads");
    expect(title).toBeInTheDocument();
  });
});
