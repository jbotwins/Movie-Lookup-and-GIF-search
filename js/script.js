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
    let fetchGifsUrl = "https://api.giphy.com/v1/gifs/search?api_key=CNW8AUft8YEVatWrmORrCt52xAjHrIOT&q=" + movieTitle + "&limit=10";
    console.log(fetchGifsUrl);
    console.log(gifSection);
    fetch(fetchGifsUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson.data);
        //    console.log(myJson.data.length);
        for (let i = 0; i < myJson.data.length; i++) {
          let gifURL = myJson.data[i].url;
          let gifSrc = myJson.data[i].images.preview_gif.url;
          //  console.log(gifSrc);
          let newDiv = document.createElement('div');
          newDiv.classList.add('RelatedGifs-item');
          let newAnchor = document.createElement('a');
          newAnchor.setAttribute('href', gifURL);
          newAnchor.setAttribute('target', '_blank');
          let newGif = document.createElement('img');
          newGif.setAttribute('src', gifSrc);
          newAnchor.append(newGif);
          newDiv.append(newAnchor);
          //  console.log(newDiv);
          gifSection.append(newDiv);
          //.appendChild(image);
        }
        // for (let gif of myJson.data) {
        //   let image = document.createElement('img');
        //   console.log(gif);
        //   // For now just making them all the same GIF... for Challenge 4 we
        //   // will make it each GIF we get back from the API
        //   image.src = gif.url;
        //   gifSection.appendChild(image);
        // }

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
