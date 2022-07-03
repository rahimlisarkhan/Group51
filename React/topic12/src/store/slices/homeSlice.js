import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  movies: [],
};

export const homeSlice = createSlice({
  name: "homssssse",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },
    incrementCounter: (state) => {
      state.value = state.value + 1;
    },
    fillMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { increment, incrementCounter ,fillMovies} = homeSlice.actions;

export default homeSlice.reducer;
