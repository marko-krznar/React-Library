import React, { useState, createContext } from "react";

export const BorrowBooksContext = createContext();

export function BorrowBooksProvider(props) {
  const [borrowBooks, setborrowBooks] = useState([
    {
      bookName: "Mali Princ",
      userName: "Darko Darkić",
      id: 1,
    },
    {
      bookName: "Alkemičar",
      userName: "Marko Markić",
      id: 2,
    },
    {
      bookName: "100 godina samoće",
      userName: "Matko Matkić",
      id: 3,
    },
  ]);

  const handleDelete = (borrowed) => {
    const existBorrowed = borrowBooks.find((x) => x.id === borrowed.id);
    if (existBorrowed) {
      setborrowBooks(borrowBooks.filter((x) => x.id !== borrowed.id));
    }
  };

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
  };

  const value = {
    borrowBooks,
    setborrowBooks,
    handleDelete,
    borrowBook,
    borrowUser,
    handleSelectBook,
    handleSelectUser,
    handleSelectedSubmit,
  };
  return (
    <BorrowBooksContext.Provider value={value}>
      {props.children}
    </BorrowBooksContext.Provider>
  );
}
