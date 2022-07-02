import { createContext, useContext, useState } from "react";

const modalProvider = createContext({});

export const ModalProvider = ({ children }) => {
  const [searchModal, setSearchModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const values = {
    setSearchModal,
    setDeleteModal,
  };

  return (
    <modalProvider.Provider value={values}>
      {searchModal && <h1>Search Modal</h1>}
      {deleteModal && <h1>Delete Modal</h1>}
      {children}
    </modalProvider.Provider>
  );
};

export const useModalsProvider = () => {
  const object = useContext(modalProvider);

  return object;
};
