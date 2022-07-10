import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  movies: [],
  // favorite_movies: JSON.parse(localStorage.getItem("favorite")) ?? [],
  favorite_movies:  [],
};

export const homeSlice = createSlice({
  name: "homssssse",
  initialState,
  reducers: {
    fillMovies: (state, action) => {
      state.movies = action.payload;
    },
    favMovie: (state, action) => {
      const isFind = state.favorite_movies.find(
        (item) => item.imdbID === action.payload.imdbID
      );
      if (!isFind) {
        state.favorite_movies = [...state.favorite_movies, action.payload];
        return;
      }
      state.favorite_movies = state.favorite_movies.filter(
        (item) => item.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { fillMovies, favMovie } = homeSlice.actions;

export default homeSlice.reducer;
