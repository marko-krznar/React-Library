import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="menu">
      <h1>Knjižnica</h1>
      <nav>
        <Link to="/knjige">Knjige</Link>
        <Link to="/korisnici">Korisnici</Link>
        <Link to="/posudene-knjige">Posuđene knjige</Link>
      </nav>
    </section>
  );
}
