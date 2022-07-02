import axios from "axios";
import { useEffect } from "react";
import { connect, useSelector, useDispatch, batch } from "react-redux";
import { fillMovies, setArtir } from "../store/action/home";

const HomePage = (props) => {
  console.log("props", props);

  useEffect(() => {
    // movies.length === 0 && getMovie();
    !props.movies.length && getMovie();
  }, []);

  const getMovie = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => {
        props.dispatch(fillMovies(res.data.Search));
        // setMovies(res.data.Search);
        // globalDispatch({ type: FILL_MOVIES, payload: res.data.Search });
      });
  };

  return (
    <>
      <h1>Home page.</h1>
      <button
        onClick={() => {
          console.log(setArtir(5));
          props.dispatch(setArtir(5));
        }}
      >
        ARTIR
      </button>
      {props.movies?.map((item) => (
        <div key={item.omdbID}>
          <img src={item.Poster} width={120} alt={item.Title} />
          <li>{item.Title}</li>
        </div>
      ))}

      <button
        onClick={
          () => {}
          // globalDispatch({
          //   type: CURRENT_MOVIE,
          //   payload: { movieID: "tt0103359" },
          // })
        }
      >
        {" "}
        Current Movie
      </button>

      {/* <Component2 data={data} /> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  product_price: state.home.price,
  movies: state.home.movies,
  product_categories: state.categories.sub_category,
});

// const mapDispatchtoProps = ()=>{

// }

export default connect(mapStateToProps)(HomePage);
