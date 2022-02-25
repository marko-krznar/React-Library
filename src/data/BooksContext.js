import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([
    {
      name: "Mali Princ",
      author: "Antoine De Saint- Exupery",
      id: 1,
    },
    {
      name: "Alkemičar",
      author: "Paulo Coelho",
      id: 2,
    },
    {
      name: "100 godina samoće",
      author: "Gabriel Garcia Marquez",
      id: 3,
    },
  ]);
  return (
    <BooksContext.Provider value={[books, setBooks]}>
      {props.children}
    </BooksContext.Provider>
  );
};
