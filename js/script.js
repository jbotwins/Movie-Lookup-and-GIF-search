let movieTitle = "Jesse";
//console.log(movieTitle);

function getGifs() {
  //  console.log('getGifs started');
  movieTitle = document.querySelector('#movie-search').value;
  //  console.log(movieTitle);
  if (movieTitle === "") {
    console.log("Movie search term not yet set.");
  } else {
    let gifSection = document.querySelector('.RelatedGifs');
    //    console.log(gifSection);
    gifSection.innerHTML = "";
    //    console.log(gifSection);
    //      let fetchGifsUrl = "https://api.giphy.com/v1/gifs/search?api_key=CNW8AUft8YEVatWrmORrCt52xAjHrIOT&q=" + movieTitle + "&limit=" + step;
    let fetchGifsUrl = "https://api.giphy.com/v1/gifs/search?api_key=CNW8AUft8YEVatWrmORrCt52xAjHrIOT&q=" + movieTitle + "&limit=10";
    console.log(fetchGifsUrl);
    console.log(gifSection);
    let newGif = document.createElement('img');
    fetch(fetchGifsUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson.data);
        console.log(myJson.data.length);

        for (let gif of myJson.data) {
          let image = document.createElement('img');
          console.log(gif);
          // For now just making them all the same GIF... for Challenge 4 we
          // will make it each GIF we get back from the API
          image.src = gif.url;
          gifSection.appendChild(image);
        }

      });

  }
}

let movieState = {
  /* Placeholder data until we add real data... */
  data: [{
    title: '',
    description: '',
    year: '',
  }, ],
}

function getMovie() {
  console.log('getMovie started');
  fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      movieState.data = data;
      console.log(movieState.data);
    });
  let output = document.querySelector('#output');
  output.innerHTML = '';
  for (let film of movieState.data) {
    output.innerHTML += `
              <h1>${film.title}</h1>
              <h3>${film.release_date}</h3>
              <p>${film.description}</p>
          `;
  }
};

function loadFunctions() {
  getGifs();
  getMovie();
};
