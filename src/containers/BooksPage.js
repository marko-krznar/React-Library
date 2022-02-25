import React, { useState, useContext } from "react";
import BookItem from "../components/BookItem";
import { BooksContext } from "../data/BooksContext";

export default function BooksPage() {
  const [books, setBooks] = useContext(BooksContext);
  return (
    <>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </>
  );
}
