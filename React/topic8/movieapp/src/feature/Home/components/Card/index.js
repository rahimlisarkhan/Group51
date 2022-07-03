import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Card.module.css";
import { useState } from "react";
import { favMovie } from "../../../../store/slices/homeSlice";

export const CardItem = (props) => {
  const { Poster, Title, Type, Year, imdbID } = props;

  const dispatch = useDispatch();

  const favoriteItem = useSelector((state) => state.home.favorite_movies);
  const isFind = favoriteItem.find((item) => item.imdbID === imdbID);

  const [showFav, setShowFav] = useState(!!isFind);

  const handleFav = () => {
    setShowFav((prev) => !prev);
    dispatch(favMovie(props));
  };
  return (
    <Card
      style={{
        width: "20rem",
        height: "450px",
        margin: "10px",
        position: "relative",
      }}
    >
      <div className={styles.fav} onClick={handleFav}>
        {showFav ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>

      <Card.Img
        variant="top"
        src={Poster}
        height="250"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Type}</Card.Text>
        <Card.Text>{Year}</Card.Text>
        <Link to={`/movie/slug=${Title}`} className="btn btn-info w-100">
          watch
        </Link>
      </Card.Body>
    </Card>
  );
};
