import React from "react";

import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";

import { useUsers } from "../../contexts/UsersContext";

export default function SingleUser() {
  const {
    editUserName,
    handleEditUserName,
    editUserSurname,
    handleEditUserSurname,
    handleEditUser,
    editUserBirth,
    handleEditBirth,
    getCurrentUser,
  } = useUsers();
  const params = useParams();

  const currentUser = getCurrentUser(params.id);

  return (
    <section className="page pg-user">
      <h2 className="headline">
        {currentUser[0]?.name} {currentUser[0]?.surname}
        <Link to="/korisnici">
          <i className="bi bi-box-arrow-left"></i>
        </Link>
      </h2>
      <div className="d-flex direction-column block--form">
        <label htmlFor="name">Novo ime</label>
        <input
          type="text"
          name="name"
          value={editUserName}
          onChange={handleEditUserName}
          placeholder={currentUser[0]?.name}
        />
        <label htmlFor="surname">Novo prezime</label>
        <input
          type="text"
          name="surname"
          value={editUserSurname}
          onChange={handleEditUserSurname}
          placeholder={currentUser[0]?.surname}
        />
        <label htmlFor="birth">Novi datum rođenja</label>
        <input
          type="date"
          id="start"
          name="birth"
          value={editUserBirth}
          max={format(new Date(), "yyyy-MM-dd")}
          onChange={handleEditBirth}
        />
        <button
          className={
            (editUserName.length ||
              editUserSurname.length ||
              editUserBirth.length) < 3
              ? "is-disabled"
              : "is-active"
          }
          onClick={() => handleEditUser(currentUser[0])}
        >
          Ažuriraj
        </button>
      </div>
    </section>
  );
}
