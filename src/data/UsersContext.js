import React, { useState, createContext } from "react";
import { format } from "date-fns";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([
    {
      name: "Darko",
      surname: "Darkić",
      birthDate: format(new Date(1995, 6, 2), "dd-MM-yyyy"),
    },
    {
      name: "Marko",
      surname: "Markić",
      birthDate: format(new Date(1995, 6, 2), "dd-MM-yyyy"),
    },
    {
      name: "Matko",
      surname: "Matkić",
      birthDate: format(new Date(1995, 6, 2), "dd-MM-yyyy"),
    },
  ]);
  const value = { users };
  return (
    <UsersContext.Provider value={value}>
      {props.children}
    </UsersContext.Provider>
  );
};
