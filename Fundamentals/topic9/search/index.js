let movieTitle = document.querySelector("#movieTitle");

movieTitle.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getSearchMovie(movieTitle.value);
    movieTitle.value = "";
  }
});

function getSearchMovie(text) {
  let myPromise = fetch(`http://www.omdbapi.com/?apikey=ecad4790&s=${text}`);

  myPromise
    .then(function (res) {
      let ikinciPromise = res.json();
      return ikinciPromise;
    })
    .then(function (res2) {
      renderMovie(res2);
    });
}

function renderMovie(data) {
  document.querySelector(
    "#resultSearch"
  ).innerHTML = `Movie result: ${data.totalResults}`;

  document.querySelector("#movieList").innerHTML = data.Search.map((item) => {
    return `
            <div class="card m-2" style="width: 18rem">
            <img
              src=${
                item.Poster === "N/A" || item.Poster === null
                  ? "https://image.shutterstock.com/image-vector/prohibited-signs-isolated-on-white-260nw-1890653254.jpg"
                  : item.Poster
              }
              class="card-img-top"
              height="200"
              id="moviePoster"
              style="object-fit: cover"
            />
            <div class="card-body">
              <h5 class="card-title" id="movieName">${item.Title}</h5>
              <p class="card-text" id="movieAwards">${item.Year}}</p>
              <a href="#" class="btn btn-warning btn-block">watch</a>
            </div>
          </div>
            
            `;
  });
}
