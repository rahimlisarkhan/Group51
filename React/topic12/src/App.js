import './App.css';
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { increment,incrementCounter,fillMovies } from './store/slices/homeSlice';
import { useEffect } from 'react';
import axios  from "axios"

const App = () => {

  const state = useSelector(state=>state)
  const dispatch = useDispatch()

  console.log(state);


  useEffect(() => {
    // movies.length === 0 && dispatch(fillMovies());
    getMovie()
  }, []);

  const getMovie = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => {
        dispatch(fillMovies(res.data.Search));
      });
  };

  const handleArtir = ()=>{
    console.log(incrementCounter());
    dispatch(incrementCounter())

  }




  return (
    <div className="App">
      <h1>Salam{state.home.value}</h1>
      <button onClick={handleArtir}>artir</button>
    </div>
  );
}

export default App;
