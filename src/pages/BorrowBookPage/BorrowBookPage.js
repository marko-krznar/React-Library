import React from "react";

import BorrowItem from "../../components/BorrowItem/BorrowItem";
import BorrowItemForm from "../../components/BorrowItemForm/BorrowItemForm";
import { useBorrowBook } from "../../contexts/BorrowBooksContext";

import "./style.scss";

export default function BorrowBookPage() {
  const { borrowBooks } = useBorrowBook();

  return (
    <section className="page pg-borrow-book">
      <h2 className="headline">Borrowed-books</h2>
      <BorrowItemForm />
      <div className="block--table">
        <table>
          <thead>
            <tr>
              <th colSpan={1}>Book</th>
              <th colSpan={1}>User</th>
              <th colSpan={1}>Borrowed</th>
              <th colSpan={2}>Due date</th>
            </tr>
          </thead>
          <tbody>
            {borrowBooks.map((borrowed) => (
              <BorrowItem key={borrowed.id} borrowed={borrowed} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
