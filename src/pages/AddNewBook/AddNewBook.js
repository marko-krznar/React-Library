import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useBooks } from "../../contexts/BooksContext";

export default function AddNewBook() {
  const { newBook, setNewBook, handleNewBook, succes } = useBooks();
  const [inputName, setInputName] = useState(false);
  const [inputAuthor, setInputAuthor] = useState(false);
  const [inputQty, setInputQty] = useState(false);

  const handleNewBookName = (e) => {
    setNewBook((prevName) => ({
      ...prevName,
      name: e.target.value,
    }));
    if (newBook.name.length > 2) {
      // console.log("Name is equal or bigger than 3", newBook.name.length);
      setInputName(true);
    } else {
      // console.log("Name is equal or smaller than 3", newBook.name.length);
      setInputName(false);
    }
  };
  // useEffect(() => {
  //   console.log("useEffect", newBook.name.length);
  // }, [newBook.name.length]);

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
        <label htmlFor="name">
          Name{" "}
          {inputName === true ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : (
            <span>
              <i className="bi bi-x-circle-fill"></i>{" "}
            </span>
          )}
        </label>
        <input
          type="text"
          id="name"
          value={newBook.name}
          onChange={handleNewBookName}
        />
        <label htmlFor="author">
          Author{" "}
          {inputAuthor === true ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : (
            <span>
              <i className="bi bi-x-circle-fill"></i>{" "}
            </span>
          )}
        </label>
        <input
          type="text"
          id="author"
          value={newBook.author}
          onChange={(e) => {
            setNewBook((prevAuthor) => ({
              ...prevAuthor,
              author: e.target.value,
            }));
            if (newBook.author.length > 2) {
              setInputAuthor(true);
            } else {
              setInputAuthor(false);
            }
          }}
        />
        <label htmlFor="qty">
          Quantity{" "}
          {inputQty === true ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : (
            <span>
              <i className="bi bi-x-circle-fill"></i>{" "}
            </span>
          )}
        </label>
        <input
          type="number"
          id="qty"
          value={newBook.qty}
          onChange={(e) => {
            setNewBook((prevQty) => ({
              ...prevQty,
              qty: e.target.value,
            }));
            if (newBook.qty > 0) {
              setInputQty(true);
            } else {
              setInputQty(false);
            }
          }}
        />
        <button type="submit">Add</button>
      </form>
      {succes === true ? (
        <p className="msg succes--msg">Book succesfully added</p>
      ) : (
        <></>
      )}
    </section>
  );
}
