import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useBooks } from "../../contexts/BooksContext";

export default function BookItem({ book }) {
  const { deleteBook } = useBooks();

  return (
    <>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td className="td--edit">
        <Link className="btn" to={`/knjiga/${book.id}`}>
          Ažuriraj
        </Link>
      </td>
      <td className="td--delete">
        <button onClick={() => deleteBook(book)}>Obriši</button>
      </td>
    </>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    author: PropTypes.string,
  }),
};
