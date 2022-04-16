let moviePoster = document.querySelector("#moviePoster"),
  movieName = document.querySelector("#movieName"),
  movieAwards = document.querySelector("#movieAwards"),
  movieYear = document.querySelector("#movieYear"),
  movieRaiting = document.querySelector("#movieRaiting");

// function getMovieName(title) {
//   fetch(`http://www.omdbapi.com/?apikey=a407a7b3&t=${title}`)
//     .then((res) => {
//       let mySecondPromise = res.json();
//       return mySecondPromise;
//     })
//     .then((data) => {
//       console.log("data", data);
//       movieData = data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

async function getMovieName(title) {
  try {
    let res = await fetch(`http://www.omdbapi.com/?apikey=a407a7b3&t=${title}`);
    let data = await res.json();
    renderMovie(data)
  } catch (err) {
    alert(err)
  } finally {
    console.log("DAta downloaded");
  }
}

document.querySelector("#searchMovie").addEventListener("click", () => {
  let movieTitle = document.querySelector("#movieTitle");

  getMovieName(movieTitle.value);

  movieTitle.value = "";
});




function renderMovie(movie){

    moviePoster.src = movie.Poster
    movieName.innerHTML = movie.Title
    movieYear.innerHTML = movie.Year
    movieAwards.innerHTML = movie.Awards == "N/A" ? "Yoxdur" : movie.Awards
    movieRaiting.innerHTML = movie.Actors
console.log("movie",movie);
}