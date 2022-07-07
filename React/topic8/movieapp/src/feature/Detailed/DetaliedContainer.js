import { Rating } from "@mui/material";
import styles from "./Detailed.module.css";

export const Content = (props) => {

  console.log("props",props);
  return (
    <div style={{position:"relative", height:"100vh"}}>
      <div className={styles.contentOverlay}>
        <img src={props.Poster} />
        <div className={styles.imgOverlay}></div>
      </div>

      <div className="row flex" style={{position:"absolute", top:"150px", zIndex:2}}>
        <div className="col-5  mt-5">
          <img
            src={props.Poster}
            className="img-fluid"
            width={400}
            height={400}
            alt={props.Title}
          />
        </div>
        <div className="col-7  mt-5">
          <h1 className=" display-5 text-light">
            {props.Title}{" "}
            <span className="h2 badge text-warning">{props.imdbRating}</span>
          </h1>
          <div className="h5 text-light">Genre: {props.Genre}</div>
          <div className="h5 text-light">Year: {props.Year}</div>
          <div className="h5 text-light">Time: {props.Runtime}</div>
          <div className="h5 text-light">Actors: {props.Actors}</div>
          <div className="h5 text-light">Language: {props.Language}</div>
          <div className="h5 text-light">Country: {props.Country}</div>
          <div className="h6 text-light">Plot: {props.Plot}</div>
          <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/>
        </div>
      </div>
    </div>
  );
};
