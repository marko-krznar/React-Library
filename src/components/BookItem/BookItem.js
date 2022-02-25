import React, { useState, useContext } from "react";
import { BooksContext } from "../../data/BooksContext";

export default function BookItem({ book }) {
  const [books, setBooks] = useContext(BooksContext);

  const deleteBook = (e) => {
    const existBook = books.find((x) => x.name === book.name);
    if (existBook) {
      setBooks(books.filter((x) => x.name !== book.name));
    }
  };

  return (
    <div className="block--book-item">
      <p>{book.name}</p>
      <p>{book.author}</p>
      <button onClick={deleteBook}>Delete</button>
    </div>
  );
}
