import * as types from "../types/home";
import axios from "axios";

export const setArtir = (payload) => ({
  type: types.ARTIR,
  payload,
});

// export const fillMovies = (payload) => ({
//   type: types.FILL_MOVIES,
//   payload,
// });

export const setIncrement = () => {
  return (thunkDispatch) => {
    thunkDispatch({
      type: types.INCREMENT,
    });
  };
};

// export const setIncrement = () => thunkDispatch =>
//   thunkDispatch({
//     type: types.INCREMENT,
//   });

export const fillMovies = () => {
  return (thunkDispatch) => {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => {
        thunkDispatch({ type: types.FILL_MOVIES, payload: res.data.Search });
      });
  };
};
