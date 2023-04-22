import { useState, useEffect } from "react";
import BookTable from "../BookTable/BookTable";

const Books = () => {
  const [books, setBooks] = useState(null);
  const getBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=40`
    );
    const data = await response.json();

    setBooks(data.items);
  };

  useEffect(() => {
    getBooks();
    console.log(books);
  }, []);

  return (
    <>
      <h1> Floral Reads</h1>
      <BookTable books={books} />
    </>
  );
};

export default Books;
