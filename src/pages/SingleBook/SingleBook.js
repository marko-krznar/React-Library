import React from "react";

import { Link, useParams } from "react-router-dom";

import { useBooks } from "../../contexts/BooksContext";

export default function SingleBook() {
  const {
    books,
    editName,
    editAuthor,
    handleEditName,
    handleEditAuthor,
    handleEditBook,
  } = useBooks();
  const params = useParams();

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.id === params.id) {
      let singleBook = book;
      return (
        <section className="page pg-book">
          <h2 className="headline">
            {singleBook.name}
            <Link to="/knjige">
              <i className="bi bi-box-arrow-left"></i>
            </Link>
          </h2>
          <p>Autor: {singleBook.author}</p>
          <div className="d-flex direction-column block--form">
            <label htmlFor="name">Novi naziv</label>
            <input
              type="text"
              name="name"
              value={editName}
              onChange={handleEditName}
              placeholder={singleBook.name}
            />
            <label htmlFor="author">Novi autor</label>
            <input
              type="text"
              name="author"
              value={editAuthor}
              onChange={handleEditAuthor}
              placeholder={singleBook.author}
            />
            <button
              className={
                (editName.length || editAuthor.length) < 3
                  ? "is-disabled"
                  : "is-active"
              }
              onClick={() => handleEditBook(book)}
            >
              Ažuriraj
            </button>
          </div>
        </section>
      );
    }
  }
  return <></>;
}
