import axios from "axios";

export const getJokes = (url) =>
  axios(url, { headers: { Accept: "application/json" } }).then((res) => res.data.results);
