import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "./SearchBar";

interface SearchBarProps {
  fetchSearchString: (query: string) => void;
}

describe("SearchBar", () => {
  const props: SearchBarProps = {
    fetchSearchString: vi.fn(),
  };

  it("should render without crashing", () => {
    render(<SearchBar {...props} />);
  });

  it("should call fetchSearchString when form is submitted", () => {
    const { getByText, getByPlaceholderText } = render(
      <SearchBar {...props} />
    );
    const input = getByPlaceholderText("Enter search term");
    const button = getByText("Search");
    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.click(button);
    expect(props.fetchSearchString).toHaveBeenCalledWith("Test");
  });

  it("should reset the input field after form is submitted", () => {
    const { getByText, getByPlaceholderText } = render(
      <SearchBar {...props} />
    );
    const input = getByPlaceholderText("Enter search term");
    const button = getByText("Search");
    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.click(button);
    expect(input).toHaveValue("");
  });
});
