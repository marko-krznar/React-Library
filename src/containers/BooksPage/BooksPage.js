import React from "react";
import BookItem from "../../components/BookItem/BookItem";
import BookItemForm from "../../components/BookItemForm/BookItemForm";
import { useBooks } from "../../data/BooksContext";
import "./style.scss";

export default function BooksPage() {
  const { books } = useBooks();
  return (
    <section className="page pg-books">
      <h2 className="headline">Knjige</h2>
      <BookItemForm />
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
