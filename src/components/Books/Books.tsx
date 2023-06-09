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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchSearchString = (input: string) => {
    setSearchString(input);
    setError(null);
  };

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=40`
        );

        const data = await response.json();

        setBooks(data.items);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setError("An error occurred while fetching data....");
        setLoading(false);
      }
    };
    if (searchString) {
      getBooks();
      if (searchString != "flowers" && books.length != 0) {
        setTableHeading(`Search results for "${searchString}" `);
      }
    }
  }, [searchString]);

  if (books.length != 0) {
    return (
      <>
        <SearchBar fetchSearchString={fetchSearchString} />
        <hr></hr>
        <h2 className={styles.tableheading}>{tableHeading}</h2>
        <BookTable books={books} />
      </>
    );
  } else {
    return (
      <>
        <SearchBar fetchSearchString={fetchSearchString} />
        <hr></hr>
        <h2 className={styles.tableheading}>{tableHeading}</h2>
        {loading ? (
          <h2>Loading....</h2>
        ) : error ? (
          <h2 className={styles.tableheading}>{error}</h2>
        ) : (
          <h2 className={styles.tableheading}>"No Books Found...."</h2>
        )}
      </>
    );
  }
};

export default Books;
