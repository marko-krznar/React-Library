import React from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../../data/UsersContext";
import { format } from "date-fns";

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
  console.log(params);

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.id == params.id) {
      let singleUser = user;
      return (
        <section className="page pg-user">
          <h2>Korisnik</h2>
          <p>
            Ime i prezime: {singleUser.name} {singleUser.surname}
          </p>
          <p>Datum rođenja: {singleUser.birthDate}</p>
          <input
            type="text"
            name="name"
            value={editUserName}
            onChange={handleEditUserName}
            placeholder="Ime"
          />
          <input
            type="text"
            name="author"
            value={editUserSurname}
            onChange={handleEditUserSurname}
            placeholder="Prezime"
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
        </section>
      );
    }
  }
}
