import { createContext, useContext, useState } from "react";

const homeProvider = createContext({});

export const HomeStoreProvider = ({ children }) => {
  const [contacts, setContacts] = useState(["994513334455"]);

  const values = {
    contacts,
    setContacts,
  };

  return (
    <homeProvider.Provider value={values}>{children}</homeProvider.Provider>
  );
};

export const useHomeProvider = () => {
  const object = useContext(homeProvider);

  return object;
};
