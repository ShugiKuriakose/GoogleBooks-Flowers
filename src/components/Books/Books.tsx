import { useState, useEffect } from "react";
import BookTable from "../BookTable/BookTable";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Books.module.scss";
import Book from "../../types/Book";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchString, setSearchString] = useState("flowers");
  const [tableHeading, setTableHeading] = useState(
    "A list of books on flowers"
  );
  const fetchSearchString = (input: string) => {
    setSearchString(input);
  };

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=40`
        );

        const data = await response.json();

        setBooks(data.items);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (searchString) {
      getBooks();
      if (searchString != "flowers") {
        setTableHeading(`Search results for "${searchString}" `);
      }
    }
  }, [searchString]);

  return (
    <>
      <SearchBar fetchSearchString={fetchSearchString} />
      <hr></hr>
      <h2 className={styles.tableheading}>{tableHeading}</h2>
      <BookTable books={books} />
    </>
  );
};

export default Books;
