import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Homepage() {
  return (
    <main className="page pg--home">
      <h2 className="headline">Welcome</h2>
      <p>On this page you can check the following functionalities:</p>
      <ul>
        <li>List of books in library</li>
        <li>Adding new books and edit existing ones</li>
        <li>List of librabry users</li>
        <li>Adding new users and edit existing ones</li>
        <li>List of borrowed books</li>
        <li>Book lending and return interface</li>
      </ul>
      <Link className="btn" to="/books">
        Books
      </Link>
      <Link className="btn" to="/users">
        Users
      </Link>
      <Link className="btn" to="/borrowed-books">
        Borrowed books
      </Link>
    </main>
  );
}
