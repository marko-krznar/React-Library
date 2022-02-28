import React, { useState, createContext } from "react";
import { format } from "date-fns";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([
    {
      name: "Darko",
      surname: "Darkić",
      birthDate: format(new Date(1995, 6, 2), "dd-MM-yyyy"),
      id: 1,
    },
    {
      name: "Marko",
      surname: "Markić",
      birthDate: format(new Date(1995, 6, 2), "dd-MM-yyyy"),
      id: 2,
    },
    {
      name: "Matko",
      surname: "Matkić",
      birthDate: format(new Date(1995, 6, 2), "dd-MM-yyyy"),
      id: 3,
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
        birthDate: format(new Date(newUserBirth), "dd-MM-yyyy"),
        id: 4,
      },
    ]);
    setNewUserName("");
    setNewUserSurname("");
  };

  // Edit

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
              name: editUserName,
              surname: editUserSurname,
              id: userId,
              birthDate: format(new Date(editUserBirth), "dd-MM-yyyy"),
            }
          : user
      )
    );
    setNewUserName("");
    setNewUserSurname("");
  };

  // end edit

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
