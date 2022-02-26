import React, { useContext } from "react";
import UserItem from "../../components/UserItem/UserItem";
import { UsersContext } from "../../data/UsersContext";

export default function UsersPage() {
  const { users } = useContext(UsersContext);
  return (
    <section className="page pg-users">
      <h2 className="headline">Korisnici</h2>
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
