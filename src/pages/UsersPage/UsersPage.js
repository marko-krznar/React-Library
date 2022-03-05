import React from "react";

import UserItem from "../../components/UserItem/UserItem";
import { useUsers } from "../../contexts/UsersContext";
import UserItemForm from "../../components/UserItemForm/UserItemForm";

import "./style.scss";

export default function UsersPage() {
  const { users } = useUsers();

  return (
    <section className="page pg-users">
      <h2 className="headline">Korisnici</h2>
      <UserItemForm />
      <div className="block--table">
        <table>
          <thead>
            <tr>
              <th colSpan={1}>Ime i prezime korisnika</th>
              <th colSpan={3}>Datum rođenja</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
