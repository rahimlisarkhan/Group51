import { useState } from "react";
import { createContext } from "react";
import { FavModal }from "../shared/containers/FavModal"

export const modalContext = createContext({});

export const ModalsProvider = ({ children }) => {
  const [favModal, setFavModal] = useState(false);

  const values = {
    favModal,
    setFavModal,
  };
  return (
    <modalContext.Provider value={values}>
      <FavModal show={favModal} handleClose={() => setFavModal(false)} />
      {children}
    </modalContext.Provider>
  );
};
