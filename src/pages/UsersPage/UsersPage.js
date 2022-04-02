import React from "react";

import UserItem from "../../components/UserItem/UserItem";
import { useUsers } from "../../contexts/UsersContext";
import UserItemForm from "../../components/UserItemForm/UserItemForm";

import "./style.scss";
import { Link } from "react-router-dom";

export default function UsersPage() {
  const { users } = useUsers();

  return (
    <section className="page pg-users">
      <div className="d-flex align-items-start">
        <h2 className="headline">Users</h2>
        <Link className="btn" to="/add-user">
          Add new user
        </Link>
      </div>
      {/* <UserItemForm /> */}
      <div className="block--table">
        <table>
          <thead>
            <tr>
              <th colSpan={1}>Name and surname</th>
              <th colSpan={3}>Date of birth</th>
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
