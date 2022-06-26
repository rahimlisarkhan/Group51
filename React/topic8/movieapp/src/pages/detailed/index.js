import { useMatch, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { movieAPI } from "../../api/detailed";

const Detailed = () => {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);

  console.log(slug);
  console.log(movie);
  //   console.log(match);

  useEffect(() => {
    getMovie(slug);
  }, []);

  const getMovie = (title) => {
    movieAPI(title).then(({ data }) => {
      setMovie(data);
    });
  };

  if (!movie) {
    return <div className="display-1 text-white">Loading...</div>;
  }

  return <h1 className="text-white">Detailed</h1>;
};

export default Detailed;
