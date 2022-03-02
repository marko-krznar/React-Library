import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../data/BooksContext";

export default function SingleBook() {
  const {
    books,
    editName,
    editAuthor,
    handleEditName,
    handleEditAuthor,
    handleEditBook,
  } = useContext(BooksContext);
  const params = useParams();

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.id == params.id) {
      let singleBook = book;
      return (
        <section>
          <h2>Knjiga</h2>
          <p>Nazi knjige: {singleBook.name}</p>
          <p>Ime autora: {singleBook.author}</p>
          <input
            type="text"
            name="name"
            value={editName}
            onChange={handleEditName}
            placeholder="Naziv knjige"
          />
          <input
            type="text"
            name="author"
            value={editAuthor}
            onChange={handleEditAuthor}
            placeholder="Ime i prezime autora"
          />
          <button onClick={() => handleEditBook(book)}>Ažuriraj</button>
        </section>
      );
    }
  }
}
