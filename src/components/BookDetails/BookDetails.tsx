import React from "react";
import styles from "./BookDetails.module.scss";
import Book from "../../types/Book";

interface BookDetailsProp {
  book: Book;
}

export const BookDetails = ({ book }: BookDetailsProp) => {
  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors;
  const description = book.volumeInfo.description;
  let imgsrc =
    "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg";
  if (book.volumeInfo.imageLinks) {
    imgsrc = book.volumeInfo.imageLinks.smallThumbnail;
  }
  return (
    <div className={styles.BookDetails}>
      <div className={styles.BookDetails__image}>
        <img
          src={imgsrc}
          alt="https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
        />
      </div>
      <div className={styles.BookDetails__details}>
        {title ? <h3>{title}</h3> : <h3></h3>}
        <h5>
          {authors ? <em>{book.volumeInfo.authors.join(" , ")}</em> : <em></em>}
        </h5>
      </div>
      <div className={styles.BookDetails__description}>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default BookDetails;
