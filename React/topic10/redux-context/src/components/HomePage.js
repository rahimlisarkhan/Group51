import { Component2 } from "./Component2";
import axios from "axios";
import { useEffect } from "react";
import { useGlobalProvider } from "../provider/GlobalStoreProvider";
import { HomeStoreProvider } from "../provider/HomeStoreProvider";
import {
  CHANGE_USER_ACCESS,
  CURRENT_MOVIE,
  FILL_MOVIES,
} from "../provider/types/global";

// import {ref,db,onValue} from 'firebase'

export const HomePage = ({ data }) => {
  // const { movies, setMovies } = useGlobalProvider();
  const { globalState, globalDispatch } = useGlobalProvider();

  const movies = globalState.movies;

  console.log("globalState", globalState);

  useEffect(() => {
    console.log("working...");

    movies.length === 0 && getMovie();

    // onValue(ref("/user",db),(data)=>{
    //   console.log("data",data);
    // })
  }, [movies]);

  const getMovie = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => {
        // setMovies(res.data.Search);
        globalDispatch({ type: FILL_MOVIES, payload: res.data.Search });
      });
  };

  // tt0103359

  return (
    <HomeStoreProvider>
      <>
        <h1>Home page.</h1>
        <button
          onClick={() =>
            globalDispatch({
              type: CHANGE_USER_ACCESS,
              payload: "sh44hfjsdhsj4hkjsd",
            })
          }
        >
          USER ACCESS
        </button>

        <button
          onClick={() =>
            globalDispatch({
              type: CURRENT_MOVIE,
              payload: { movieID: "tt0103359" },
            })
          }
        > Current Movie</button>

        {/* <Component2 data={data} /> */}
      </>
    </HomeStoreProvider>
  );
};
