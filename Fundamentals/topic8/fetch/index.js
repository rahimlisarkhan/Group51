$(document).ready(function(){

let moviePoster = $("#moviePoster"),
  movieName = $("#movieName"),
  movieAwards = $("#movieAwards"),
  movieYear = $("#movieYear"),
  movieRaiting = $("#movieRaiting");

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

$("#movieTitle").on("keydown",function(e){

  if(e.key === "Enter"){

    getMovieName(e.target.value);

    $("#movieTitle").val("");
    return
  }
})



$("#searchMovie").on("click", () => {

  let movieTitle = $("#movieTitle");
  console.log("salam");

  getMovieName(movieTitle.val());

  movieTitle.val("");
});


function renderMovie(movie){
    moviePoster.attr("src",movie.Poster) 
    movieName.html(movie.Title)
    movieYear.html(movie.Year)
    movieAwards.html(movie.Awards == "N/A" ? "Yoxdur" : movie.Awards)
    movieRaiting.html(movie.Actors)
}

})
