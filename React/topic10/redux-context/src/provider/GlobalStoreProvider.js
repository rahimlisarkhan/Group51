import { useContext, useReducer } from "react";

import { createContext } from "react";
import {
  CHANGE_USER_ACCESS,
  CURRENT_MOVIE,
  FILL_MOVIES,
  SET_COUNT,
  SHOW_PANEL,
} from "./types/global";

const appContext = createContext({});

const initState = {
  count: 0,
  isShowPanel: false,
  movies: [],
  user: {
    access: null,
    id: null,
  },
  currentMovie: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, count: state.count + 1 };

    case SHOW_PANEL:
      return { ...state, isShowPanel: !state.isShowPanel };

    case FILL_MOVIES:
      return { ...state, movies: action.payload };

    case CHANGE_USER_ACCESS:
      return { ...state, user: { ...state.user, access: action.payload } };

    case CURRENT_MOVIE:
      let findMovie = state.movies.find(
        (item) => item.imdbID === action.payload.movieID
      );

      return { ...state, currentMovie: findMovie };
    default:
      return state;
  }
};

export const GlobalStoreProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(reducer, initState);

  return (
    <appContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </appContext.Provider>
  );
};

export const useGlobalProvider = () => {
  const globalData = useContext(appContext);
  return globalData;
};
