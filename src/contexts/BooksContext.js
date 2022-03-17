import React, { useState, createContext, useContext, useEffect } from "react";
import uniqid from "uniqid";

const BooksContext = createContext();

export const useBooks = () => useContext(BooksContext);

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([
    {
      name: "Mali Princ",
      author: "Antoine De Saint- Exupery",
      qty: 4,
      id: uniqid(),
    },
    {
      name: "Alkemičar",
      author: "Paulo Coelho",
      qty: 6,
      id: uniqid(),
    },
    {
      name: "100 godina samoće",
      author: "Gabriel Garcia Marquez",
      qty: 7,
      id: uniqid(),
    },
  ]);

  const [newBook, setNewBook] = useState({
    name: "",
    author: "",
    qty: 0,
    id: uniqid(),
  });

  const [editName, setEditName] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [succes, setSucces] = useState(false);

  const handleNewBook = (e) => {
    e.preventDefault();
    if (
      newBook.name.length <= 3 ||
      newBook.author.length <= 3 ||
      parseFloat(newBook.qty) < 1
    ) {
      return;
    }
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setSucces(true);
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      name: "",
      author: "",
      qty: 0,
      id: uniqid(),
    }));
  };

  const deleteBook = (book) => {
    const existBook = books.find((x) => x.id === book.id);
    if (existBook) {
      setBooks(books.filter((x) => x.id !== book.id));
    }
  };

  const getCurrentBook = (id) => {
    return books.filter((book) => book.id === id);
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
          ? {
              name: editName.length > 3 ? editName : book.name,
              author: editAuthor.length > 3 ? editAuthor : book.author,
              id: bookId,
            }
          : book
      )
    );
    setEditName("");
    setEditAuthor("");
  };

  useEffect(() => {
    if (succes === false) {
      return;
    }
    let message = setTimeout(() => setSucces(false), 8000);
    return () => {
      clearTimeout(message);
    };
  }, [succes]);

  useEffect(() => {
    const getBooks = JSON.parse(localStorage.getItem("books"));
    if (getBooks) {
      setBooks(getBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const value = {
    books,
    newBook,
    setNewBook,
    handleNewBook,
    editName,
    editAuthor,
    deleteBook,
    handleEditName,
    handleEditAuthor,
    handleEditBook,
    getCurrentBook,
    succes,
  };

  return (
    <BooksContext.Provider value={value}>
      {props.children}
    </BooksContext.Provider>
  );
};
