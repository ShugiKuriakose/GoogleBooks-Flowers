import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookTable from "./BookTable";

describe("BookTable", () => {
  const books = {
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

  it("should render the book table correctly", () => {
    render(<BookTable books={books.items} />);

    // Ensure that the table headers are rendered
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Authors")).toBeInTheDocument();
    expect(screen.getByText("Published Date")).toBeInTheDocument();

    // Ensure that the book details are rendered
    expect(screen.getByText("Title A")).toBeInTheDocument();
    expect(screen.getByText("AAuthor")).toBeInTheDocument();
    expect(screen.getByText("20-12-2021")).toBeInTheDocument();

    expect(screen.getByText("bTitle")).toBeInTheDocument();
    expect(screen.getByText("bAuthor1")).toBeInTheDocument();
    expect(screen.getByText("20-4-2019")).toBeInTheDocument();
  });
});
