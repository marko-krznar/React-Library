import React from "react";

import { Link } from "react-router-dom";

export default function NothingFoundPage() {
  return (
    <section className="page pg-nothingfound">
      <h2>Ups...Ova stranica ne postoji</h2>
      <p>
        Vratite se natrag na{" "}
        <Link className="btn" to="/">
          Naslovnu
        </Link>
      </p>
    </section>
  );
}
