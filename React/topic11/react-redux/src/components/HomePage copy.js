import axios from "axios";
import { useEffect } from "react";
import { connect, useSelector, useDispatch, batch } from "react-redux";

const HomePage = (props) => {
  console.log("props", props);

  const stateHome = useSelector((state) => state.home);
  const product_price = useSelector((state) => state.home.price);
  const dispatch = useDispatch();

  console.log("stateHome", stateHome);
  console.log("product_price", product_price);

  useEffect(() => {
    // movies.length === 0 && getMovie();
  }, []);

  const getMovie = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => {
        // setMovies(res.data.Search);
        // globalDispatch({ type: FILL_MOVIES, payload: res.data.Search });
      });
  };

  return (
    <>
      <h1>Home page.</h1>
      <button
        onClick={() =>
          // props.dispatch({
          //   type: "ARTIR",
          //   payload: 5,
          // })
          batch(() => {
            dispatch({
              type: "ARTIR",
              payload: 5,
            });
          })
        }
      >
        ARTIR
      </button>

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

// const mapStateToProps = (state) => ({
//   product_price: state.home.price,
//   product_categories: state.categories.sub_category,
// });

// export default connect()(HomePage);
export default HomePage;
