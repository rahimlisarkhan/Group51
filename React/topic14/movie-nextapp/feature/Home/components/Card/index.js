import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useRouter } from "next/router";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { useSelector, useDispatch } from "react-redux";

import styles from "./Card.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
// import { favMovie } from "../../../../store/slices/homeSlice";

export const CardItem = (props) => {
  const { Poster, Title, Type, Year, imdbID } = props;

  // const dispatch = useDispatch();

  // const favoriteItem = useSelector((state) => state.home.favorite_movies);
  // const isFind = favoriteItem.find((item) => item.imdbID === imdbID);

  const [showFav, setShowFav] = useState(false);

  const handleFav = () => {
    setShowFav((prev) => !prev);
    // dispatch(favMovie(props));

    // getWriteStore();
  };

  // const getWriteStore = () => {
  //   let array = JSON.parse(localStorage.getItem("favorite"));
  //   console.log("array", array);

  //   const isFind = array.find((item) => item.imdbID === imdbID);

  //   if (!isFind) {
  //     array = array ? [...array, props] : [props];
  //     return;
  //   }
  //   array = array.filter((item) => item.imdbID !== imdbID);

  //   localStorage.setItem("favorite", JSON.stringify(array));
  // };

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
        <button className="btn btn-warning w-100" onClick={() => {}}>
          Watch
        </button>
      </Card.Body>
    </Card>
  );
};
