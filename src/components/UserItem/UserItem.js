import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../data/UsersContext";

export default function UserItem({ user }) {
  const { users, setUsers, handleDeleteUser } = useContext(UsersContext);

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
        <button onClick={() => handleDeleteUser(user)}>Obriši</button>
      </td>
    </tr>
  );
}
