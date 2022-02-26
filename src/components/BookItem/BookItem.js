import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../../data/BooksContext";
import "./style.scss";

export default function BookItem({ book }) {
  const { deleteBook } = useContext(BooksContext);

  return (
    <tr className="block--book-item">
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>
        <Link to={`/knjiga/${book.id}`}>Ažuriraj</Link>
      </td>
      <td>
        <button onClick={() => deleteBook(book)}>Obriši</button>
      </td>
    </tr>
  );
}
