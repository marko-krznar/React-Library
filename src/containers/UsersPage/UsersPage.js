import React, { useContext } from "react";
import UserItem from "../../components/UserItem/UserItem";
import { UsersContext } from "../../data/UsersContext";
import { format } from "date-fns";

export default function UsersPage() {
  const {
    users,
    newUserName,
    newUserSurname,
    newUserBirth,
    handleNewName,
    handleNewSurname,
    handleBirth,
    handleSubmit,
  } = useContext(UsersContext);

  return (
    <section className="page pg-users">
      <h2 className="headline">Korisnici</h2>
      <div className="d-flex justify-content-between align-items-center block--add-book">
        <p>Dodaj novog korisnika</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newUserName}
            onChange={handleNewName}
            placeholder="Ime"
          />
          <input
            type="text"
            value={newUserSurname}
            onChange={handleNewSurname}
            placeholder="Prezime"
          />
          <input
            type="date"
            id="start"
            name="birth"
            value={newUserBirth}
            max={format(new Date(), "yyyy-MM-dd")}
            onChange={handleBirth}
          ></input>
          <button>Dodaj</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan={1}>Ime i prezime korisnika</th>
            <th colSpan={3}>Datum rođenja</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserItem key={index} user={user} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
