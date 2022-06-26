import axios from "axios";


export const movieAPI =(title)=> axios.get(`http://www.omdbapi.com/?apikey=a407a7b3&t=${title}`)
