import React from "react";
import BorrowItem from "../../components/BorrowItem/BorrowItem";
import BorrowItemForm from "../../components/BorrowItemForm/BorrowItemForm";
import { useBorrowBook } from "../../data/BorrowBooksContext";

export default function BorrowBookPage() {
  const { borrowBooks } = useBorrowBook();
  return (
    <section className="page pg-borrow-book">
      <h2 className="headline">Posuđene knjige</h2>
      <BorrowItemForm />
      <table>
        <thead>
          <tr>
            <th colSpan={1}>Knjiga</th>
            <th colSpan={2}>Korisnik</th>
          </tr>
        </thead>
        <tbody>
          {borrowBooks.map((borrowed, index) => (
            <BorrowItem key={index} borrowed={borrowed} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
