import React from "react";

import PropTypes from "prop-types";

import { useBorrowBook } from "../../contexts/BorrowBooksContext";

export default function BorrowItem({ borrowed }) {
  const { handleDelete } = useBorrowBook();

  return (
    <tr>
      <td>{borrowed.bookName}</td>
      <td>{borrowed.userName}</td>
      <td>{borrowed.dateCreated}</td>
      <td>{borrowed.dateDue}</td>
      <td className="td--delete">
        <button onClick={() => handleDelete(borrowed)}>Obriši</button>
      </td>
    </tr>
  );
}

BorrowItem.propTypes = {
  borrowed: PropTypes.shape({
    bookName: PropTypes.string,
    dateCreated: PropTypes.string,
    dateDue: PropTypes.string,
    id: PropTypes.string.isRequired,
    userName: PropTypes.string,
  }),
};
