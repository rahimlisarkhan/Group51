import { Component2 } from "./Component2";
import axios from "axios";
import { useEffect } from "react";
import { useGlobalProvider } from "../provider/GlobalStoreProvider";
import { HomeStoreProvider } from "../provider/HomeStoreProvider";

export const HomePage = ({ data }) => {
  const { movies, setMovies } = useGlobalProvider();

  useEffect(() => {
    console.log("working...");

    !movies && getMovie();
  }, []);

  const getMovie = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => {
        setMovies(res.data.Search);
      });
  };

  return (
    <HomeStoreProvider>
      <>
        <h1>Home page.</h1>
        <Component2 data={data} />
      </>
    </HomeStoreProvider>
  );
};
