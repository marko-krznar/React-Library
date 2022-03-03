import React from "react";

import { Link } from "react-router-dom";
import { format } from "date-fns";
import PropTypes from "prop-types";

import { useUsers } from "../../data/UsersContext";

export default function UserItem({ user }) {
  const { handleDeleteUser } = useUsers();
  return (
    <tr className="block--book-item">
      <td>
        {user.name} {user.surname}
      </td>
      <td>{format(new Date(user.birthDate), "dd.MM.yyyy.")}</td>
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

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    surname: PropTypes.string,
    birthDate: PropTypes.string,
  }),
};
