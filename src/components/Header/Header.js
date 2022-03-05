import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
  return (
    <section className="menu">
      <h1>Knjižnica</h1>
      <nav className="d-flex direction-column">
        <Link className="btn" to="/">
          <i className="bi bi-house"></i> <span>Naslovna</span>
        </Link>
        <Link className="btn" to="/knjige">
          <i className="bi bi-book"></i> <span>Knjige</span>
        </Link>
        <Link className="btn" to="/korisnici">
          <i className="bi bi-person"></i> <span>Korisnici</span>
        </Link>
        <Link className="btn" to="/posudene-knjige">
          <i className="bi bi-clipboard"></i> <span>Posuđene knjige</span>
        </Link>
      </nav>
    </section>
  );
}
