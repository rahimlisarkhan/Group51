export const Content = (props) => {
  return (
    <div className="container">
      <div className="row flex">
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
          <h1 className=" display-5 text-light">{props.Title}</h1>
          <div className="h4 text-warning">{props.imdbRating}</div>
          <div className="h5 text-light">Genre: {props.Genre}</div>
          <div className="h5 text-light">Year: {props.Year}</div>
          <div className="h5 text-light">Time: {props.Runtime}</div>
          <div className="h5 text-light">Actors: {props.Actors}</div>
          <div className="h5 text-light">Actors: {props.Language}</div>
          <div className="h5 text-light">Actors: {props.Country}</div>
          <div className="h6 text-light">Actors: {props.Plot}</div>
        </div>
      </div>
    </div>
  );
};
