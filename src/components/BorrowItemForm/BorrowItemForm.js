import React from "react";
import { useBooks } from "../../contexts/BooksContext";
import { useUsers } from "../../contexts/UsersContext";
import { useBorrowBook } from "../../contexts/BorrowBooksContext";

export default function BorrowItemForm() {
  const { books } = useBooks();
  const { users } = useUsers();
  const {
    borrowBook,
    borrowUser,
    handleSelectBook,
    handleSelectUser,
    handleSelectedSubmit,
  } = useBorrowBook();

  return (
    <section className="block--form-add">
      <form
        onSubmit={handleSelectedSubmit}
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex direction-column">
          <label htmlFor="book">Odaberi knjigu</label>
          <select
            value={borrowBook}
            name="book"
            id="book"
            onChange={handleSelectBook}
          >
            <option value="placeholder" defaultValue hidden>
              Odaberi
            </option>
            {books.map((book) => (
              <option key={book.id} value={book.name}>
                {book.name}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex direction-column">
          <label htmlFor="user">Odaberi korisnika</label>
          <select
            value={borrowUser}
            name="user"
            id="user"
            onChange={handleSelectUser}
          >
            <option value="placeholder" defaultValue hidden>
              Odaberi
            </option>

            {users.map((user) => (
              <option key={user.id} value={user.name + " " + user.surname}>
                {user.name} {user.surname}
              </option>
            ))}
          </select>
        </div>

        <button
          className={
            (borrowBook.length && borrowUser.length) < 3
              ? "is-disabled"
              : "is-active"
          }
          type="submit"
        >
          Dodaj
        </button>
      </form>
    </section>
  );
}
