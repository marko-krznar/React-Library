import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useUsers } from "../../contexts/UsersContext";
import {
  handleInputTextValidation,
  handleInputDateValidation,
} from "../../functions/inputValidator";

export default function AddUser() {
  const { newUser, setNewUser, handleNewUser, formValid } = useUsers();

  const [inputName, setInputName] = useState(false);
  const [inputSurname, setInputSurname] = useState(false);
  const [inputBirthDate, setInputBirthDate] = useState(false);

  useEffect(() => {
    handleInputTextValidation(newUser.name.length, setInputName);
    handleInputTextValidation(newUser.surname.length, setInputSurname);
    handleInputDateValidation(newUser.birthDate.length, setInputBirthDate);
  }, [newUser.name, newUser.surname, newUser.birthDate]);

  return (
    <section className="page pg-users">
      <Link className="btn btn--back d-flex align-items-center" to="/users">
        <i className="bi bi-box-arrow-left"></i>
        <span>Back</span>
      </Link>
      <h2 className="headline">Add new user</h2>
      <p>Here you can add new user</p>
      <form
        className="d-flex direction-column block--form"
        onSubmit={handleNewUser}
      >
        <label className="d-flex flex-wrap" htmlFor="name">
          Name
          {inputName === true ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : (
            <span>
              <i className="bi bi-x-circle-fill"></i>{" "}
            </span>
          )}
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
        <label className="d-flex flex-wrap" htmlFor="surname">
          Surname
          {inputSurname === true ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : (
            <span>
              <i className="bi bi-x-circle-fill"></i>{" "}
            </span>
          )}
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
        <label className="d-flex flex-wrap" htmlFor="date-birth">
          Date of birth
          {inputBirthDate === true ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : (
            <span>
              <i className="bi bi-x-circle-fill"></i>{" "}
            </span>
          )}
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
        <button
          className={
            newUser.name.length <= 3 ||
            newUser.surname.length <= 3 ||
            newUser.birthDate.length !== 10
              ? "is-disabled"
              : ""
          }
          type="submit"
        >
          Add
        </button>
      </form>
      {formValid === true ? (
        <p className="msg success--msg">Book successfully added</p>
      ) : (
        <></>
      )}
    </section>
  );
}
