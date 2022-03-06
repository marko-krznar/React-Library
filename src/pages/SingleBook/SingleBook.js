import React from "react";

import { Link, useParams } from "react-router-dom";

import { useBooks } from "../../contexts/BooksContext";

export default function SingleBook() {
  const {
    editName,
    editAuthor,
    handleEditName,
    handleEditAuthor,
    handleEditBook,
    getCurrentBook,
  } = useBooks();
  const params = useParams();

  const currentBook = getCurrentBook(params.id);

  return (
    <section className="page pg-book">
      <h2 className="headline">
        {currentBook[0]?.name}
        <Link to="/knjige">
          <i className="bi bi-box-arrow-left"></i>
        </Link>
      </h2>
      <p>Autor: {currentBook[0]?.author}</p>
      <div className="d-flex direction-column block--form">
        <label htmlFor="name">Novi naziv</label>
        <input
          type="text"
          name="name"
          value={editName}
          onChange={handleEditName}
          placeholder={currentBook[0]?.name}
        />
        <label htmlFor="author">Novi autor</label>
        <input
          type="text"
          name="author"
          value={editAuthor}
          onChange={handleEditAuthor}
          placeholder={currentBook[0]?.author}
        />
        <button
          className={
            (editName.length || editAuthor.length) < 3
              ? "is-disabled"
              : "is-active"
          }
          onClick={() => handleEditBook(currentBook[0])}
        >
          Ažuriraj
        </button>
      </div>
    </section>
  );
}
