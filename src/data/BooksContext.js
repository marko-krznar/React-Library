import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([
    {
      name: "Mali Princ",
      author: "Antoine De Saint- Exupery",
    },
    {
      name: "Alkemičar",
      author: "Paulo Coelho",
    },
    {
      name: "100 godina samoće",
      author: "Gabriel Garcia Marquez",
    },
  ]);
  return (
    <BooksContext.Provider value={[books, setBooks]}>
      {props.children}
    </BooksContext.Provider>
  );
};
