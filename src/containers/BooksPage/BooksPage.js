import React, { useState, useContext } from "react";
import BookItem from "../../components/BookItem/BookItem";
import { BooksContext } from "../../data/BooksContext";

export default function BooksPage() {
  const [books, setBooks] = useContext(BooksContext);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const addBook = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [...prevBooks, { name: name, author: author }]);
    setName("");
    setAuthor("");
  };

  return (
    <>
      <form onSubmit={addBook}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={updateName}
          placeholder="Naziv knjige"
        />
        <input
          type="text"
          name="author"
          value={author}
          onChange={updateAuthor}
          placeholder="Ime i prezime autora"
        />
        <button type="submit">Dodaj</button>
      </form>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </>
  );
}
