import { useContext, useState } from "react";

import { createContext } from "react";

const appContext = createContext({});

export const GlobalStoreProvider = ({ children }) => {
  const [count, setCount] = useState(5);
  const [isShowPanel, setIsShowPanel] = useState(false);
  const [movies, setMovies] = useState(null);

  const values = {
    count,
    setCount,
    isShowPanel,
    setIsShowPanel,
    movies,
    setMovies,
  };
  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export const useGlobalProvider = () => {
  const globalData = useContext(appContext);
  return globalData;
};
