import React, { useState } from "react";

import BookItem from "../../components/BookItem/BookItem";
import BookItemForm from "../../components/BookItemForm/BookItemForm";
import { useBooks } from "../../contexts/BooksContext";

import "./style.scss";

export default function BooksPage() {
  const { books } = useBooks();
  const [term, setTerm] = useState("");

  const handleSearchTerm = (e) => {
    setTerm(e.target.value.toLowerCase());
  };

  const searchedBook = books.filter((book) => {
    if (book.name.toLowerCase().includes(term)) {
      return book;
    }
  });

  return (
    <section className="page pg-books">
      <h2 className="headline">Knjige</h2>
      <BookItemForm />
      <div className="block--search d-flex align-items-center justify-content-start">
        <span>Traži knjigu</span>
        <input type="text" value={term} onChange={handleSearchTerm} />
      </div>
      <div className="block--table">
        <table>
          <thead>
            <tr>
              <th colSpan={1}>Naziv knjige</th>
              <th colSpan={3}>Autor knjige</th>
            </tr>
          </thead>
          <tbody>
            {searchedBook.length === 0 ? (
              <tr>
                <td colSpan={4}>
                  Knjiga <span className="txt--underline">{term}</span> ne može
                  se pronaći
                </td>
              </tr>
            ) : (
              searchedBook.map((book, index) => (
                <tr className="block--book-item" key={index}>
                  <BookItem book={book} />
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
