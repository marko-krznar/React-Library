import React, { useState, createContext, useContext } from "react";
import uniqid from "uniqid";

const BooksContext = createContext();

export const useBooks = () => useContext(BooksContext);

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([
    {
      name: "Mali Princ",
      author: "Antoine De Saint- Exupery",
      id: uniqid(),
    },
    {
      name: "Alkemičar",
      author: "Paulo Coelho",
      id: uniqid(),
    },
    {
      name: "100 godina samoće",
      author: "Gabriel Garcia Marquez",
      id: uniqid(),
    },
  ]);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [editName, setEditName] = useState("");
  const [editAuthor, setEditAuthor] = useState("");

  const newName = (e) => {
    setName(e.target.value);
  };

  const newAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const addBook = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [
      ...prevBooks,
      { name: name, author: author, id: uniqid() },
    ]);
    setName("");
    setAuthor("");
  };

  const deleteBook = (book) => {
    const existBook = books.find((x) => x.id === book.id);
    if (existBook) {
      setBooks(books.filter((x) => x.id !== book.id));
    }
  };

  const handleEditName = (e) => {
    setEditName(e.target.value);
  };

  const handleEditAuthor = (e) => {
    setEditAuthor(e.target.value);
  };

  const handleEditBook = (book) => {
    const bookId = book.id;
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? { name: editName, author: editAuthor, id: bookId }
          : book
      )
    );
    setEditName("");
    setEditAuthor("");
  };

  const value = {
    books,
    newName,
    newAuthor,
    addBook,
    name,
    author,
    editName,
    editAuthor,
    deleteBook,
    handleEditName,
    handleEditAuthor,
    handleEditBook,
  };

  return (
    <BooksContext.Provider value={value}>
      {props.children}
    </BooksContext.Provider>
  );
};
