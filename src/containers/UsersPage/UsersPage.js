import React, { useContext, useState } from "react";
import UserItem from "../../components/UserItem/UserItem";
import { UsersContext } from "../../data/UsersContext";
import { format } from "date-fns";

export default function UsersPage() {
  const { users, setUsers } = useContext(UsersContext);
  const [newUserName, setNewUserName] = useState("");
  const [newUserSurname, setNewUserSurname] = useState("");
  const [newUserBirth, setNewUserBirth] = useState("");

  const handleNewName = (e) => {
    setNewUserName(e.target.value);
  };

  const handleNewSurname = (e) => {
    setNewUserSurname(e.target.value);
  };
  const handleBirth = (e) => {
    setNewUserBirth(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        name: newUserName,
        surname: newUserSurname,
        birthDate: format(new Date(newUserBirth), "dd-MM-yyyy"),
        id: 4,
      },
    ]);
    setNewUserName("");
    setNewUserSurname("");
  };

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
