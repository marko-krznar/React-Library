import React, { useState, useContext } from "react";
import BookItem from "../../components/BookItem/BookItem";
import { BooksContext } from "../../data/BooksContext";
import "./style.scss";

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
    <section className="page pg-books">
      <h2 className="headline">Knjige</h2>
      <div className="d-flex justify-content-between align-items-center block--add-book">
        <p>Dodaj novu knjigu</p>
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
      </div>
      <table>
        <thead>
          <tr>
            <th>Naziv knjige</th>
            <th>Autor knjige</th>
            <th>Ažuriraj</th>
            <th>Obriši</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <BookItem key={index} book={book} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
