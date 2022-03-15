import React from "react";

import { Link } from "react-router-dom";

import { useBooks } from "../../contexts/BooksContext";

export default function AddNewBook() {
  const { newBook, setNewBook, handleNewBook } = useBooks();

  return (
    <section className="page pg-add-book">
      <Link className="btn btn--back d-flex align-items-center" to="/knjige">
        <i className="bi bi-box-arrow-left"></i>
        <span>Back</span>
      </Link>
      <h2 className="headline">Add new book</h2>
      <p>Here you can add new book</p>
      <form
        className="d-flex direction-column block--form"
        onSubmit={handleNewBook}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={newBook.name}
          onChange={(e) => {
            setNewBook((prevName) => ({
              ...prevName,
              name: e.target.value,
            }));
          }}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={newBook.author}
          onChange={(e) => {
            setNewBook((prevAuthor) => ({
              ...prevAuthor,
              author: e.target.value,
            }));
          }}
        />
        <label htmlFor="qty">Quantity</label>
        <input
          type="number"
          id="qty"
          value={newBook.qty}
          onChange={(e) => {
            setNewBook((prevQty) => ({
              ...prevQty,
              qty: e.target.value,
            }));
          }}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
