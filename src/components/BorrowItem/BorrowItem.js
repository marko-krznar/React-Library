import React from "react";
import { useBorrowBook } from "../../data/BorrowBooksContext";

export default function BorrowItem({ borrowed }) {
  const { handleDelete } = useBorrowBook();

  return (
    <tr>
      <td>{borrowed.bookName}</td>
      <td>{borrowed.userName}</td>
      <td className="td--delete">
        <button onClick={() => handleDelete(borrowed)}>Obriši</button>
      </td>
    </tr>
  );
}
