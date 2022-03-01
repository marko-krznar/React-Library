import React, { useContext } from "react";
import { BorrowBooksContext } from "../../data/BorrowBooksContext";

export default function BorrowItem({ borrowed }) {
  const { handleDelete } = useContext(BorrowBooksContext);
  console.log(borrowed);

  return (
    <tr>
      <td>{borrowed.bookName}</td>
      <td>{borrowed.userName}</td>
      <td>
        <button onClick={() => handleDelete(borrowed)}>Obriši</button>
      </td>
    </tr>
  );
}
