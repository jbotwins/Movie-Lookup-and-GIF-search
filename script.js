
  function getGifs() {
    let movieTitle = document.querySelector('#movie-search').value;
    // console.log('function ran');
    // let movieTitle = 'Cable Guy';
    let searchResult = [];
    fetch("https://api.giphy.com/v1/gifs/search?api_key=CNW8AUft8YEVatWrmORrCt52xAjHrIOT&q=" + movieTitle + "&limit=5").then(response => response.json()).then(response => console.log(response.data[3].url))

  }

  let movieState = {
  /* Placeholder data until we add real data... */
  data: [{
    title: '',
    description: '',
    year: '',
  }, ],
};

function getMovie() {
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
}
