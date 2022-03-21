import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
  return (
    <section className="menu">
      <h1>Library</h1>
      <nav className="d-flex direction-column">
        <Link className="btn" to="/">
          <i className="bi bi-house"></i> <span>Home</span>
        </Link>
        <Link className="btn" to="/books">
          <i className="bi bi-book"></i> <span>Books</span>
        </Link>
        <Link className="btn" to="/users">
          <i className="bi bi-person"></i> <span>Users</span>
        </Link>
        <Link className="btn" to="/borrowed-books">
          <i className="bi bi-clipboard"></i> <span>Borrowed books</span>
        </Link>
      </nav>
    </section>
  );
}
