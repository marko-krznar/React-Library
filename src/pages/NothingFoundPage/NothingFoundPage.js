import React from "react";

import { Link } from "react-router-dom";

export default function NothingFoundPage() {
  return (
    <section className="page pg-nothingfound">
      <h2>OOoops...This page doesn't exist</h2>
      <p>
        Go back to{" "}
        <Link className="btn" to="/">
          Home
        </Link>
      </p>
    </section>
  );
}
