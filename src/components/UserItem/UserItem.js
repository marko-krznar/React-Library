import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({ user }) {
  return (
    <tr className="block--book-item">
      <td>
        {user.name} {user.surname}
      </td>
      <td>{user.birthDate}</td>
      <td>
        <Link to={`/korisnik`}>Ažuriraj</Link>
      </td>
      <td>
        <button>Obriši</button>
      </td>
    </tr>
  );
}
