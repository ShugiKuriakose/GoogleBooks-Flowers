import { fireEvent, render, screen } from "@testing-library/react";
import Books from "./Books";
import { describe, it, expect, vi, beforeEach } from "vitest";

beforeEach(() => {
  global.fetch = mockFetch;
});
interface SearchBarProps {
  fetchSearchString: (query: string) => void;
}

const mockResponse = {
  items: [
    {
      id: "1234",
      volumeInfo: {
        title: "Title A",
        categories: ["Cat1", "Cat2"],
        publisher: "Publisher1",
        authors: ["AAuthor"],
        description: "adescription",
        infoLink: "astring",
        imageLinks: {
          smallThumbnail: "astring",
        },
        publishedDate: "20-12-2021",
      },
    },
    {
      id: "1245",
      volumeInfo: {
        title: "bTitle",
        categories: ["bCategoty", "nCategory"],
        publisher: "bPublisher",
        authors: ["bAuthor1"],
        description: "bDescription",
        infoLink: "bLink",
        imageLinks: {
          smallThumbnail: "bimageLink",
        },
        publishedDate: "20-4-2019",
      },
    },
  ],
};

const mockFetch = vi.fn().mockResolvedValue({
  json: vi.fn().mockResolvedValue(mockResponse),
});

describe("Books component", () => {
  it("should render without crashing", () => {
    render(<Books />);
  });

  it("renders the book table with the initial heading", async () => {
    render(<Books />);

    expect(screen.getByText(/A list of books on flowers/i)).toBeInTheDocument();
  });

  it("renders the search button", async () => {
    render(<Books />);

    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
