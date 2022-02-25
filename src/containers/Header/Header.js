import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
  return (
    <section className="menu">
      <h1>Knjižnica</h1>
      <nav className="d-flex direction-column">
        <Link className="btn" to="/">
          <i className="bi bi-house"></i> Naslovna
        </Link>
        <Link className="btn" to="/knjige">
          <i className="bi bi-book"></i> Knjige
        </Link>
        <Link className="btn" to="/korisnici">
          <i className="bi bi-person"></i> Korisnici
        </Link>
        <Link className="btn" to="/posudene-knjige">
          <i className="bi bi-clipboard"></i> Posuđene knjige
        </Link>
      </nav>
    </section>
  );
}
