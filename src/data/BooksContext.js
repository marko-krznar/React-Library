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
    setBooks((prevBooks) => [...prevBooks, { name: name, author: author }]);
    setName("");
    setAuthor("");
  };

  const deleteBook = (book) => {
    const existBook = books.find((x) => x.name === book.name);
    if (existBook) {
      setBooks(books.filter((x) => x.name !== book.name));
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
    console.log(bookId, book.id);
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
