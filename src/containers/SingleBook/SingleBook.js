import React from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../../data/BooksContext";

export default function SingleBook() {
  const {
    books,
    editName,
    editAuthor,
    handleEditName,
    handleEditAuthor,
    handleEditBook,
  } = useBooks();
  const params = useParams();

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.id == params.id) {
      let singleBook = book;
      return (
        <section className="page pg-book">
          <h2>Knjiga</h2>
          <p>Nazi knjige: {singleBook.name}</p>
          <p>Ime autora: {singleBook.author}</p>
          <input
            type="text"
            name="name"
            value={editName}
            onChange={handleEditName}
            placeholder={singleBook.name}
          />
          <input
            type="text"
            name="author"
            value={editAuthor}
            onChange={handleEditAuthor}
            placeholder={singleBook.author}
          />
          <button onClick={() => handleEditBook(book)}>Ažuriraj</button>
        </section>
      );
    }
  }
}
