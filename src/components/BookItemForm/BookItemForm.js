import React from "react";
import { useBooks } from "../../contexts/BooksContext";

export default function BookItemForm() {
  const { newName, newAuthor, addBook, name, author } = useBooks();
  return (
    <div className="d-flex justify-content-between align-items-center block--form-add">
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
        <button
          className={
            (name.length && author.length) < 3 ? "is-disabled" : "is-active"
          }
          type="submit"
        >
          Dodaj
        </button>
      </form>
    </div>
  );
}
