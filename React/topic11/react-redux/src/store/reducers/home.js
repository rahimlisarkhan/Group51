// import { ARTIR } from "../type"

import * as types from "../types/home";

let initialState = {
  price: 0,
  movies: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ARTIR:
      return { ...state, price: action.payload };

    case types.FILL_MOVIES:
      return { ...state, movies: action.payload };

    default:
      return state;
  }
};


export const stateMovieLength = (state) => state.home.movies.length;

