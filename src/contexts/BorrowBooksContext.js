import React, { useState, createContext, useContext } from "react";

import uniqid from "uniqid";
import { format, addDays } from "date-fns";

const BorrowBooksContext = createContext();

export const useBorrowBook = () => useContext(BorrowBooksContext);

export function BorrowBooksProvider(props) {
  const today = format(new Date(), "dd.MM.yyyy.");
  const due = format(addDays(new Date(today), 30), "dd.MM.yyyy.");
  const [borrowBooks, setborrowBooks] = useState([
    {
      bookName: "Mali Princ",
      userName: "Darko Darkić",
      id: uniqid(),
      dateCreated: format(new Date(2022, 1, 1), "dd.MM.yyyy."),
      dateDue: format(addDays(new Date(2022, 1, 1), 30), "dd.MM.yyyy."),
    },
    {
      bookName: "Alkemičar",
      userName: "Marko Markić",
      id: uniqid(),
      dateCreated: format(new Date(2022, 1, 15), "dd.MM.yyyy."),
      dateDue: format(addDays(new Date(2022, 1, 15), 30), "dd.MM.yyyy."),
    },
    {
      bookName: "100 godina samoće",
      userName: "Matko Matkić",
      id: uniqid(),
      dateCreated: format(new Date(2022, 2, 1), "dd.MM.yyyy."),
      dateDue: format(addDays(new Date(2022, 2, 1), 30), "dd.MM.yyyy."),
    },
  ]);
  const [borrowBook, setBorrowBook] = useState("");
  const [borrowUser, setBorrowUser] = useState("");
  const [borrowDate, setBorrowDate] = useState("");
  const [borrowDateDue, setBorrowDateDue] = useState("");

  const handleDelete = (borrowed) => {
    const existBorrowed = borrowBooks.find((x) => x.id === borrowed.id);
    if (existBorrowed) {
      setborrowBooks(borrowBooks.filter((x) => x.id !== borrowed.id));
    }
  };

  const handleSelectBook = (e) => {
    setBorrowBook(e.target.value);
    setBorrowDate(today);
    setBorrowDateDue(due);
  };

  const handleSelectUser = (e) => {
    setBorrowUser(e.target.value);
  };

  const handleSelectedSubmit = (e) => {
    e.preventDefault(e);
    setborrowBooks((prevBorrowedBooks) => [
      ...prevBorrowedBooks,
      {
        bookName: borrowBook,
        userName: borrowUser,
        id: uniqid(),
        dateCreated: borrowDate,
        dateDue: borrowDateDue,
      },
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
