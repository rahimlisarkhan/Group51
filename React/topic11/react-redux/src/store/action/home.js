import * as types from "../types/home";

export const setArtir = (payload) => ({
  type: types.ARTIR,
  payload,
});

export const fillMovies = (payload) => ({
  type: types.FILL_MOVIES,
  payload,
});
