import { useEffect } from "react";
import { useGlobalProvider } from "../provider/GlobalStoreProvider";
import axios from "axios";
import { useModalsProvider } from "../provider/ModalProvider";
import { useHomeProvider } from "../provider/HomeStoreProvider";

export const AboutPage = () => {
  const { count, movies, setMovies } = useGlobalProvider();
  const { setDeleteModal } = useModalsProvider();


  useEffect(() => {
    !movies && getMovie();

    return ()=>{
      setDeleteModal(false)
    }
  }, []);

  const getMovie = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => {
        setMovies(res.data.Search);
      });
  };

  console.log("movies", movies);

  return (
    <>
      <h1>About PAge. {count}</h1>
      <button onClick={() => setDeleteModal(true)}>Delete item</button>
    </>
  );
};
