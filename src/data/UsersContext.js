import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([
    {
      name: "Darko",
      surname: "Darkić",
    },
    {
      name: "Marko",
      surname: "Markić",
    },
    {
      name: "Matko",
      surname: "Matkić",
    },
  ]);
  const value = { users };
  return (
    <UsersContext.Provider value={value}>
      {props.children}
    </UsersContext.Provider>
  );
};
