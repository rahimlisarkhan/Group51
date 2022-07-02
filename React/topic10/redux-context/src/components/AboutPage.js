import { useEffect } from "react";
import { useGlobalProvider } from "../provider/GlobalStoreProvider";
import axios from "axios";
import { useModalsProvider } from "../provider/ModalProvider";
import { useHomeProvider } from "../provider/HomeStoreProvider";
import { FILL_MOVIES } from "../provider/types/global";

export const AboutPage = () => {
  const { globalState, globalDispatch } = useGlobalProvider();
  const { setDeleteModal } = useModalsProvider();

  useEffect(() => {
    !globalState.movies.length && getMovie();

    return () => {
      setDeleteModal(false);
    };
  }, []);

  const getMovie = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => {
        globalDispatch({ type: FILL_MOVIES, payload: res.data.Search });
      });
  };

  console.log("movies", globalState.movies);

  return (
    <>
      <h1>About PAge. {globalState.count}</h1>
      <button onClick={() => setDeleteModal(true)}>Delete item</button>
    </>
  );
};
