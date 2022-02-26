import React, { useContext } from "react";
import { BooksContext } from "../../data/BooksContext";
import "./style.scss";

export default function BookItem({ book }) {
  const {
    editName,
    editAuthor,
    deleteBook,
    handleEditName,
    handleEditAuthor,
    handleEditBook,
  } = useContext(BooksContext);

  return (
    <tr className="block--book-item">
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>
        <input
          type="text"
          name="name"
          value={editName}
          onChange={handleEditName}
          placeholder="Naziv knjige"
        />
        <input
          type="text"
          name="author"
          value={editAuthor}
          onChange={handleEditAuthor}
          placeholder="Ime i prezime autora"
        />
        <button onClick={() => handleEditBook(book)}>Ažuriraj</button>
      </td>
      <td>
        <button onClick={() => deleteBook(book)}>Obriši</button>
      </td>
    </tr>
  );
}
