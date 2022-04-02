import React from "react";

import { Link } from "react-router-dom";

import { useUsers } from "../../contexts/UsersContext";

export default function AddUser() {
  const { newUser, setNewUser, handleNewUser } = useUsers();

  return (
    <section className="page pg-users">
      <Link className="btn btn--back d-flex align-items-center" to="/users">
        <i className="bi bi-box-arrow-left"></i>
        <span>Back</span>
      </Link>
      <h2 className="headline">Add new user</h2>
      <p>Here you can add new user</p>
      <form onSubmit={handleNewUser}>
        <label htmlFor="">
          Name
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => {
              setNewUser((prev) => ({
                ...prev,
                name: e.target.value.trim(),
              }));
            }}
          />
        </label>
        <label htmlFor="">
          Surname
          <input
            type="text"
            value={newUser.surname}
            onChange={(e) => {
              setNewUser((prev) => ({
                ...prev,
                surname: e.target.value.trim(),
              }));
            }}
          />
        </label>
        <label htmlFor="">
          Date of birth
          <input
            type="date"
            value={newUser.birthDate}
            onChange={(e) => {
              setNewUser((prev) => ({
                ...prev,
                birthDate: e.target.value.trim(),
              }));
            }}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
