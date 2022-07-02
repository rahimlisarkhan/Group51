import { useEffect } from "react";
import axios from "axios";
import { stateMovieLength } from "../store/reducers/home";
import { useSelector } from "react-redux";

export const AboutPage = () => {
  // const { globalState, globalDispatch } = useGlobalProvider();
  // const { setDeleteModal } = useModalsProvider();
  const movieCount = useSelector(stateMovieLength);

  useEffect(() => {
    // !globalState.movies.length && getMovie();

    return () => {
      // setDeleteModal(false);
    };
  }, []);

  const getMovie = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => {
        // globalDispatch({ type: FILL_MOVIES, payload: res.data.Search });
      });
  };

  // console.log("movies", globalState.movies);

  return (
    <>
      <h1>About page homedan gelen: {movieCount}</h1>
      {/* <h1>About PAge. {globalState.count}</h1> */}
      {/* <button onClick={() => setDeleteModal(true)}>Delete item</button> */}
    </>
  );
};
