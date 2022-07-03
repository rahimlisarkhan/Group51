import axios from "axios";
import { useEffect } from "react";
import { connect, useSelector, useDispatch, batch } from "react-redux";
import { fillMovies, setArtir,setIncrement } from "../store/action/home";

const HomePage = (props) => {
  console.log("props", props);

  useEffect(() => {
    // movies.length === 0 && getMovie();
    !props.movies.length && props.setDispatchFillMovies();
  }, []);



  return (
    <>
      <h1>Home page.</h1>
      <button
        onClick={() => {
          // console.log(setArtir(5));
          // props.dispatch(setIncrement());

          batch(()=>{

            props.setDispatchArtir(20)
            props.setDispatchIncrement()

          })

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
  product_count: state.home.count,
  movies: state.home.movies,
  product_categories: state.categories.sub_category,
});

const mapDispatchtoProps = (dispatch)=>({
  setDispatchArtir: (num) => dispatch(setArtir(num)),
  setDispatchIncrement: () => dispatch(setIncrement()),
  setDispatchFillMovies: ()=> dispatch(fillMovies())
})

export default connect(mapStateToProps,mapDispatchtoProps)(HomePage);
