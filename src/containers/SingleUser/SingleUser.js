import React from "react";

import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";

import { useUsers } from "../../data/UsersContext";

export default function SingleUser() {
  const {
    users,
    editUserName,
    handleEditUserName,
    editUserSurname,
    handleEditUserSurname,
    handleEditUser,
    editUserBirth,
    handleEditBirth,
  } = useUsers();
  const params = useParams();

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.id == params.id) {
      let singleUser = user;
      return (
        <section className="page pg-user">
          <h2 className="headline">
            {singleUser.name} {singleUser.surname}
            <Link to="/korisnici">
              <i className="bi bi-box-arrow-left"></i>
            </Link>
          </h2>
          <p>
            Datum rođenja:{" "}
            {format(new Date(singleUser.birthDate), "dd.MM.yyyy.")}
          </p>
          <div className="d-flex direction-column block--form">
            <input
              type="text"
              name="name"
              value={editUserName}
              onChange={handleEditUserName}
              placeholder={singleUser.name}
            />
            <input
              type="text"
              name="author"
              value={editUserSurname}
              onChange={handleEditUserSurname}
              placeholder={singleUser.surname}
            />
            <input
              type="date"
              id="start"
              name="birth"
              value={editUserBirth}
              max={format(new Date(), "yyyy-MM-dd")}
              onChange={handleEditBirth}
            />
            <button onClick={() => handleEditUser(user)}>Ažuriraj</button>
          </div>
        </section>
      );
    }
  }
}
