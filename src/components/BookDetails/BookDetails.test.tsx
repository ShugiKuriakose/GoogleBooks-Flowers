import { describe, it, expect } from "vitest";

import BookDetails from "./BookDetails";

import { render, screen } from "@testing-library/react";

const book = {
  book: {
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
};

describe("BookDetails", () => {
  it("should render without crashing", () => {
    render(<BookDetails book={book.book} />);
  });

  it("should render the book details", () => {
    render(<BookDetails book={book.book} />);
    expect(screen.queryByText("Title A")).toBeInTheDocument();
    expect(screen.getByText("AAuthor")).toBeInTheDocument();
    expect(screen.getByText("adescription")).toBeInTheDocument();
  });
});
