import React, { useContext, useState } from "react";
import { BooksContext } from "../../data/BooksContext";
import { UsersContext } from "../../data/UsersContext";
import { BorrowBooksContext } from "../../data/BorrowBooksContext";

export default function BorrowItemForm() {
  const { books } = useContext(BooksContext);
  const { users } = useContext(UsersContext);
  const { setborrowBooks } = useContext(BorrowBooksContext);

  const [borrowBook, setBorrowBook] = useState("");
  const [borrowUser, setBorrowUser] = useState("");

  const handleSelectBook = (e) => {
    setBorrowBook(e.target.value);
  };

  const handleSelectUser = (e) => {
    setBorrowUser(e.target.value);
  };

  const handleSelectedSubmit = (e) => {
    e.preventDefault(e);
    setborrowBooks((prevBorrowedBooks) => [
      ...prevBorrowedBooks,
      { bookName: borrowBook, userName: borrowUser, id: 4 },
    ]);
    setBorrowBook("");
    setBorrowUser("");
  };

  return (
    <section className="block--form-add">
      <form
        onSubmit={handleSelectedSubmit}
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          <label htmlFor="book">Odaberi knjigu</label>
          <select
            value={borrowBook}
            name="book"
            id="book"
            onChange={handleSelectBook}
          >
            {books.map((book, index) => (
              <option key={index} value={book.name}>
                {book.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="user">Odaberi korisnika</label>
          <select
            value={borrowUser}
            name="user"
            id="user"
            onChange={handleSelectUser}
          >
            {users.map((user, index) => (
              <option key={index} value={user.name + " " + user.surname}>
                {user.name} {user.surname}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Dodaj</button>
      </form>
    </section>
  );
}
