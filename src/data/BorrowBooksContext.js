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

  const value = { borrowBooks, setborrowBooks, handleDelete };
  return (
    <BorrowBooksContext.Provider value={value}>
      {props.children}
    </BorrowBooksContext.Provider>
  );
}
