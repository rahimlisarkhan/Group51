// import { ARTIR } from "../type"

import * as types from "../types/home";

let initialState = {
  price: 0,
  movies: [],
  count: 0,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ARTIR:
      return { ...state, price: action.payload };

    case types.FILL_MOVIES:
      return { ...state, movies: action.payload };

    case types.INCREMENT:
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};

export const stateMovieLength = (state) => state.home.movies.length;
