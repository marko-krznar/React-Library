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
        <input
          type="text"
          name="name"
          value={editUserName}
          onChange={handleEditUserName}
          placeholder={currentUser[0]?.name}
        />
        <input
          type="text"
          name="author"
          value={editUserSurname}
          onChange={handleEditUserSurname}
          placeholder={currentUser[0]?.surname}
        />
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
            editUserName.length < 3 ||
            editUserSurname.length < 3 ||
            editUserBirth.length < 10
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
