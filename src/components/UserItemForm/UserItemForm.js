import React from "react";
import { useUsers } from "../../data/UsersContext";
import { format } from "date-fns";

export default function UserItemForm() {
  const {
    newUserName,
    newUserSurname,
    newUserBirth,
    handleNewName,
    handleNewSurname,
    handleBirth,
    handleSubmit,
  } = useUsers();
  return (
    <div className="d-flex justify-content-between align-items-center block--form-add">
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
        <button
          className={
            (newUserName.length &&
              newUserSurname.length &&
              newUserBirth.length) < 3
              ? "is-disabled"
              : "is-active"
          }
        >
          Dodaj
        </button>
      </form>
    </div>
  );
}
