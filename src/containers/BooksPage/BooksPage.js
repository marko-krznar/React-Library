import React from "react";
import BookItem from "../../components/BookItem/BookItem";
import BookItemForm from "../../components/BookItemForm/BookItemForm";
import { useBooks } from "../../data/BooksContext";

export default function BooksPage() {
  const { books } = useBooks();
  return (
    <section className="page pg-books">
      <h2 className="headline">Knjige</h2>
      <BookItemForm />
      <table>
        <thead>
          <tr>
            <th colSpan={1}>Naziv knjige</th>
            <th colSpan={3}>Autor knjige</th>
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
