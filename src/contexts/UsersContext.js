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

  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    birthDate: "",
    id: uniqid(),
  });

  const [editUserName, setEditUserName] = useState("");
  const [editUserSurname, setEditUserSurname] = useState("");
  const [editUserBirth, setEditUserBirth] = useState("");

  const handleDeleteUser = (user) => {
    const existUser = users.find((x) => x.id === user.id);
    if (existUser) {
      setUsers(users.filter((x) => x.id !== user.id));
    }
  };

  const handleNewUser = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setNewUser({ name: "", surname: "", birthDate: "", id: uniqid() });
  };

  const getCurrentUser = (id) => {
    return users.filter((user) => user.id === id);
  };

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
    newUser,
    setNewUser,
    handleNewUser,
    editUserName,
    handleEditUserName,
    editUserSurname,
    handleEditUserSurname,
    handleEditUser,
    editUserBirth,
    handleEditBirth,
    getCurrentUser,
  };
  return (
    <UsersContext.Provider value={value}>
      {props.children}
    </UsersContext.Provider>
  );
};
