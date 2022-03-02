import React from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../data/UsersContext";

export default function UserItem({ user }) {
  const { handleDeleteUser } = useUsers();

  return (
    <tr className="block--book-item">
      <td>
        {user.name} {user.surname}
      </td>
      <td>{user.birthDate}</td>
      <td className="td--edit">
        <Link className="btn" to={`/korisnik/${user.id}`}>
          Ažuriraj
        </Link>
      </td>
      <td className="td--delete">
        <button onClick={() => handleDeleteUser(user)}>Obriši</button>
      </td>
    </tr>
  );
}
