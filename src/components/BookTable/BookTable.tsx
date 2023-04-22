import { useEffect, useState } from "react";
import * as ReactModal from "react-modal";
import BookDetails from "../BookDetails/BookDetails";
import styles from "./BookTable.module.scss";

const BookTable = ({ books }) => {
  const [currentBook, setCurrentBook] = useState(null);
  const [sortedBooks, setSortedBooks] = useState(books);
  useEffect(() => {
    setSortedBooks(books);
  }, [books]);

  const [order, setOrder] = useState("asc");
  const [dateOrder, setDateOrder] = useState("asc");
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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortingByTitle()}>
              <button className={styles.sortButton}>Title</button>
            </th>
            <th>
              <button className={styles.sortButton}>Authors</button>
            </th>
            <th onClick={() => sortingByDate()}>
              <button className={styles.sortButton}>Published Date</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks &&
            sortedBooks.map((result) => {
              return (
                <tr key={result.id}>
                  <td> {result.volumeInfo.title} </td>
                  <td>{result.volumeInfo.authors}</td>
                  <td>{result.volumeInfo.publishedDate}</td>
                  <td>
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
