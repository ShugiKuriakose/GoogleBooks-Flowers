import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("should display a title ", () => {
    render(<Header />);
    const title = screen.getByText(/Floral Reads/i);
    expect(title).toBeInTheDocument();
  });
});
