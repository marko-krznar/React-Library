import React, { useState, createContext, useContext, useEffect } from "react";
import { format } from "date-fns";
import uniqid from "uniqid";

const UsersContext = createContext();

export const useUsers = () => useContext(UsersContext);

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([
    {
      name: "Darko",
      surname: "Darkić",
      birthDate: format(new Date(1995, 6, 2), "dd-MM-yyyy"),
      id: uniqid(),
    },
    {
      name: "Marko",
      surname: "Markić",
      birthDate: format(new Date(1995, 6, 2), "dd-MM-yyyy"),
      id: uniqid(),
    },
    {
      name: "Matko",
      surname: "Matkić",
      birthDate: format(new Date(1995, 6, 2), "dd-MM-yyyy"),
      id: uniqid(),
    },
  ]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserSurname, setNewUserSurname] = useState("");
  const [newUserBirth, setNewUserBirth] = useState("");

  const handleDeleteUser = (user) => {
    const existUser = users.find((x) => x.id === user.id);
    if (existUser) {
      setUsers(users.filter((x) => x.id !== user.id));
    }
  };

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
        birthDate: newUserBirth,
        id: uniqid(),
      },
    ]);
    setNewUserName("");
    setNewUserSurname("");
  };

  const [editUserName, setEditUserName] = useState("");
  const [editUserSurname, setEditUserSurname] = useState("");
  const [editUserBirth, setEditUserBirth] = useState("");

  const handleEditUserName = (e) => {
    setEditUserName(e.target.value);
  };

  const handleEditUserSurname = (e) => {
    setEditUserSurname(e.target.value);
  };

  const handleEditBirth = (e) => {
    setEditUserBirth(e.target.value);
  };

  const handleEditUser = (user) => {
    const userId = user.id;
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              name: editUserName.length > 3 ? editUserName : user.name,
              surname:
                editUserSurname.length > 3 ? editUserSurname : user.surname,
              id: userId,
              birthDate:
                editUserBirth.length === 10 ? editUserBirth : user.birthDate,
            }
          : user
      )
    );
    setNewUserName("");
    setNewUserSurname("");
  };

  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    if (getUsers) {
      setUsers(getUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const value = {
    users,
    setUsers,
    handleDeleteUser,
    newUserName,
    setNewUserName,
    newUserSurname,
    setNewUserSurname,
    newUserBirth,
    setNewUserBirth,
    handleNewName,
    handleNewSurname,
    handleBirth,
    handleSubmit,
    editUserName,
    handleEditUserName,
    editUserSurname,
    handleEditUserSurname,
    handleEditUser,
    editUserBirth,
    handleEditBirth,
  };
  return (
    <UsersContext.Provider value={value}>
      {props.children}
    </UsersContext.Provider>
  );
};
