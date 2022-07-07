import axios from "axios";

export const moviesAPI = axios.get(
  "http://www.omdbapi.com/?apikey=a407a7b3&s=movie"
);
