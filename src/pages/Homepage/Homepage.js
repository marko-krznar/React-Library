import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Homepage() {
  return (
    <main className="page pg--home">
      <h2 className="headline">Dobrodošli</h2>
      <p>Na ovoj stranici možete provjeriti sljedeće funkcionalnosti:</p>
      <ul>
        <li>Pregled knjiga u knjižnici</li>
        <li>
          Dodavanje novih knjiga i uređivanje postojećih (u knjižnici može biti
          više knjiga istog naslova)
        </li>
        <li>Pregled korisnika knjižnice</li>
        <li>Dodavanje novih korisnika i uređivanje postojećih</li>
        <li>Pregled posuđenih knjiga</li>
        <li>
          Sučelje za posuđivanje i vraćanje knjiga (jedan korisnik može posuditi
          više knjiga istovremeno)
        </li>
      </ul>
      <Link className="btn" to="/knjige">
        Pogledaj knjige
      </Link>
      <Link className="btn" to="/korisnici">
        Pogledaj korisnike
      </Link>
      <Link className="btn" to="/posudene-knjige">
        Pogledaj posuđene knjige
      </Link>
    </main>
  );
}
