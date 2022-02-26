import React, { useContext } from "react";
import BookItem from "../../components/BookItem/BookItem";
import { BooksContext } from "../../data/BooksContext";
import "./style.scss";

export default function BooksPage() {
  const { books, newName, newAuthor, addBook, name, author } =
    useContext(BooksContext);
  console.log(books);
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
            onChange={newName}
            placeholder="Naziv knjige"
          />
          <input
            type="text"
            name="author"
            value={author}
            onChange={newAuthor}
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
