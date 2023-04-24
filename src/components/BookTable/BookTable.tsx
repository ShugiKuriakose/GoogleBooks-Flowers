import { useEffect, useState } from "react";
import * as ReactModal from "react-modal";
import BookDetails from "../BookDetails/BookDetails";
import styles from "./BookTable.module.scss";
import Book from "../../types/Book";

interface BookTableProps {
  books: Book[];
}

const BookTable = ({ books }: BookTableProps) => {
  const [currentBook, setCurrentBook] = useState<Book | null>(null);
  const [sortedBooks, setSortedBooks] = useState(books);
  useEffect(() => {
    setSortedBooks(books);
    console.log(books);
  }, [books]);

  const [order, setOrder] = useState("asc");
  const [dateOrder, setDateOrder] = useState("asc");
  const [authOrder, setAuthOrder] = useState("asc");
  const sortingByTitle = () => {
    if (order === "asc") {
      const sorted = [...books].sort((a, b) =>
        a.volumeInfo.title.toLowerCase() > b.volumeInfo.title.toLowerCase()
          ? 1
          : -1
      );
      setSortedBooks(sorted);
      setOrder("dec");
    }
    if (order === "dec") {
      const sorted = [...books].sort((a, b) =>
        a.volumeInfo.title.toLowerCase() < b.volumeInfo.title.toLowerCase()
          ? 1
          : -1
      );
      setSortedBooks(sorted);
      setOrder("asc");
    }
  };

  const sortingByDate = () => {
    if (dateOrder === "asc") {
      const sorted = [...books].sort((a, b) =>
        a.volumeInfo.publishedDate > b.volumeInfo.publishedDate ? 1 : -1
      );
      setSortedBooks(sorted);
      setDateOrder("dec");
    }
    if (dateOrder === "dec") {
      const sorted = [...books].sort((a, b) =>
        a.volumeInfo.publishedDate < b.volumeInfo.publishedDate ? 1 : -1
      );
      setSortedBooks(sorted);
      setDateOrder("asc");
    }
  };

  const sortingByAuthor = () => {
    if (authOrder === "asc") {
      const sorted = [...books].sort((a, b) =>
        a.volumeInfo.authors > b.volumeInfo.authors ? 1 : -1
      );
      setSortedBooks(sorted);
      setAuthOrder("dec");
    }
    if (authOrder === "dec") {
      const sorted = [...books].sort((a, b) =>
        a.volumeInfo.authors < b.volumeInfo.authors ? 1 : -1
      );
      setSortedBooks(sorted);
      setAuthOrder("asc");
    }
  };

  return (
    <div>
      <table className={styles.bookTable}>
        <thead>
          <tr className={styles.rowHead}>
            <th onClick={() => sortingByTitle()}>
              <button className={styles.sortButton}>Title</button>
            </th>
            <th onClick={() => sortingByAuthor()}>
              <button className={styles.sortButton}>Authors</button>
            </th>
            <th onClick={() => sortingByDate()}>
              <button className={styles.sortButton}>Published Date</button>
            </th>
            <th>
              <p>Details</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks &&
            sortedBooks.map((result) => {
              return (
                <tr className={styles.row} key={result.id}>
                  <td className={styles.title}>
                    {result.volumeInfo.title ? (
                      result.volumeInfo.title
                    ) : (
                      <em>No Title Found</em>
                    )}
                  </td>
                  <td className={styles.authors}>
                    {result.volumeInfo.authors ? (
                      <p>{result.volumeInfo.authors.join(", ")}</p>
                    ) : (
                      <em>Author Unknown</em>
                    )}
                  </td>
                  <td className={styles.date}>
                    {result.volumeInfo.publishedDate ? (
                      result.volumeInfo.publishedDate
                    ) : (
                      <em>Date not found</em>
                    )}
                  </td>
                  <td className={styles.details}>
                    <button
                      className={styles.sortButton}
                      onClick={() => {
                        setCurrentBook(result);
                      }}
                    >
                      More Info
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ReactModal
        className={styles.detailsModal}
        appElement={document.getElementById("root") as HTMLElement}
        isOpen={Boolean(currentBook)}
      >
        {currentBook && <BookDetails book={currentBook} />}
        <button onClick={() => setCurrentBook(null)}>Close</button>
      </ReactModal>
    </div>
  );
};

export default BookTable;
