import React, { useState, useContext } from "react";
import { BooksContext } from "../../data/BooksContext";
import "./style.scss";

export default function BookItem({ book }) {
  const [books, setBooks] = useContext(BooksContext);
  const [editName, setEditName] = useState("");
  const [editAuthor, setEditAuthor] = useState("");

  const deleteBook = () => {
    const existBook = books.find((x) => x.name === book.name);
    if (existBook) {
      setBooks(books.filter((x) => x.name !== book.name));
    }
  };

  const handleEditName = (e) => {
    setEditName(e.target.value);
  };

  const handleEditAuthor = (e) => {
    setEditAuthor(e.target.value);
  };

  const handleEditBook = (e) => {
    e.preventDefault();
    const bookId = book.id;
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? { name: editName, author: editAuthor, id: bookId }
          : book
      )
    );
    setEditName("");
    setEditAuthor("");
  };

  return (
    <tr className="block--book-item">
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>
        <form onSubmit={handleEditBook}>
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
          <button type="submit">Ažuriraj</button>
        </form>
      </td>
      <td>
        <button onClick={deleteBook}>Obriši</button>
      </td>
    </tr>
  );
}
