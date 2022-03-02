import React, { useState, createContext, useContext } from "react";
import uniqid from "uniqid";

const BorrowBooksContext = createContext();

export const useBorrowBook = () => useContext(BorrowBooksContext);

export function BorrowBooksProvider(props) {
  const [borrowBooks, setborrowBooks] = useState([
    {
      bookName: "Mali Princ",
      userName: "Darko Darkić",
      id: uniqid(),
    },
    {
      bookName: "Alkemičar",
      userName: "Marko Markić",
      id: uniqid(),
    },
    {
      bookName: "100 godina samoće",
      userName: "Matko Matkić",
      id: uniqid(),
    },
  ]);
  const [borrowBook, setBorrowBook] = useState("");
  const [borrowUser, setBorrowUser] = useState("");

  const handleDelete = (borrowed) => {
    const existBorrowed = borrowBooks.find((x) => x.id === borrowed.id);
    if (existBorrowed) {
      setborrowBooks(borrowBooks.filter((x) => x.id !== borrowed.id));
    }
  };

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
      { bookName: borrowBook, userName: borrowUser, id: uniqid() },
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
