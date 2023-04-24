interface Book {
  volumeInfo: {
    title: string;
    categories?: string[];
    publisher?: string;
    authors: string[];
    description: string;
    infoLink: string;
    imageLinks?: {
      smallThumbnail: string;
    };
    publishedDate: string;
  };
}

export default Book;
