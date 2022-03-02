import React, { useContext } from "react";
import { BooksContext } from "../../data/BooksContext";

export default function BookItemForm() {
  const { newName, newAuthor, addBook, name, author } =
    useContext(BooksContext);
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
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}
