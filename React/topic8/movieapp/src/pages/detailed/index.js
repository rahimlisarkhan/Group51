import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieAPI } from "../../api/detailed";
import { Content } from "../../feature/Detailed/DetaliedContainer";

const Detailed = () => {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);

  console.log(slug);
  console.log(movie);
  //   console.log(match);

  useEffect(() => {
    getMovie(slug);
  }, [slug]);

  const getMovie = (title) => {
    movieAPI(title).then(({ data }) => {
      setMovie(data);
    });
  };

  if (!movie) {
    return <div className="display-1 text-white">Loading...</div>;
  }

  return (
    <h1 className="text-white">
      <Content {...movie} />
    </h1>
  );
};

export default Detailed;
