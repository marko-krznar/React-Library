import React from "react";
import UserItem from "../../components/UserItem/UserItem";
import { useUsers } from "../../data/UsersContext";
import UserItemForm from "../../components/UserItemForm/UserItemForm";

export default function UsersPage() {
  const { users } = useUsers();

  return (
    <section className="page pg-users">
      <h2 className="headline">Korisnici</h2>
      <UserItemForm />
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
    </section>
  );
}
