import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useBooks } from "../../contexts/BooksContext";
import {
  handleInputTextValidation,
  handleInputNumberValidation,
} from "../../functions/inputValidator";

export default function AddNewBook() {
  const { newBook, setNewBook, handleNewBook, success } = useBooks();
  const [inputName, setInputName] = useState(false);
  const [inputAuthor, setInputAuthor] = useState(false);
  const [inputQty, setInputQty] = useState(false);

  useEffect(() => {
    handleInputTextValidation(newBook.name.length, setInputName);
    handleInputTextValidation(newBook.author.length, setInputAuthor);
    handleInputNumberValidation(newBook.qty, setInputQty);
  }, [newBook.name, newBook.author, newBook.qty]);

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
        <label className="d-flex flex-wrap" htmlFor="name">
          Name{" "}
          {inputName === true ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : (
            <span>
              <i className="bi bi-x-circle-fill"></i>{" "}
            </span>
          )}
          <input
            type="text"
            id="name"
            value={newBook.name}
            onChange={(e) => {
              setNewBook((prevName) => ({
                ...prevName,
                name: e.target.value.trim(),
              }));
            }}
          />
        </label>
        <label className="d-flex flex-wrap" htmlFor="author">
          Author{" "}
          {inputAuthor === true ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : (
            <span>
              <i className="bi bi-x-circle-fill"></i>{" "}
            </span>
          )}
          <input
            type="text"
            id="author"
            value={newBook.author}
            onChange={(e) => {
              setNewBook((prevAuthor) => ({
                ...prevAuthor,
                author: e.target.value.trim(),
              }));
            }}
          />
        </label>

        <label className="d-flex flex-wrap" htmlFor="qty">
          Quantity{" "}
          {inputQty === true ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : (
            <span>
              <i className="bi bi-x-circle-fill"></i>{" "}
            </span>
          )}
          <input
            min="1"
            max="15"
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
        </label>
        <button type="submit">Add</button>
      </form>
      {success === true ? (
        <p className="msg success--msg">Book successfully added</p>
      ) : (
        <></>
      )}
    </section>
  );
}
