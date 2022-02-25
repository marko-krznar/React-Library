import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../../data/BooksContext";

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
    <div className="block--book-item">
      <p>{book.name}</p>
      <p>{book.author}</p>
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
      <button onClick={deleteBook}>Obriši</button>
    </div>
  );
}
