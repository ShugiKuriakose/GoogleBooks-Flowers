import { useState } from "react";
import * as ReactModal from "react-modal";
import BookDetails from "../BookDetails/BookDetails";

const BookTable = ({ books }) => {
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Published Date</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((result) => {
              return (
                <tr key={result.id}>
                  <td> {result.volumeInfo.title} </td>
                  <td>{result.volumeInfo.authors}</td>
                  <td>{result.volumeInfo.publishedDate}</td>
                  <td>
                    <button
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
