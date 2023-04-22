import { useState, useEffect } from "react";
import BookTable from "../BookTable/BookTable";
import SearchBar from "../SearchBar/SearchBar";

const Books = () => {
  const [books, setBooks] = useState(null);
  const [searchString, setSearchString] = useState("flowers");

  const fetchSearchString = (input) => {
    setSearchString(input);
  };

  const getBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=40`
    );
    const data = await response.json();

    setBooks(data.items);
  };

  useEffect(() => {
    if (searchString) {
      getBooks();
    }
  }, [searchString]);

  return (
    <>
      <SearchBar fetchSearchString={fetchSearchString} />
      <BookTable books={books} />
    </>
  );
};

export default Books;
