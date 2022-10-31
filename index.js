const api_url =  "https://www.omdbapi.com/?apikey=15f80a04&s=fast"




function renderMovies() {
    const moviesWrapper = document.querySelector(".movies");

    const movies = getData();
    console.log(movies)
    moviesWrapper.innerHTML = 
`<div class="movie">
    <figure class="movie__img--wrapper">
        <img src="./assets/ff7_movie.jpg" alt="" class="movie__img">
    </figure>
        <h4 class="movie__name">Fast & Furious 7</h4>
        <ul class="movie__info-list">
        <li class="movie__info">director</li>
        <li class="movie__info">Release year</li>
    </ul>
</div>`
};

setTimeout(() => {
    renderMovies();
})

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
};



getData();

