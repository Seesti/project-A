const api_url =  "https://www.omdbapi.com/?apikey=15f80a04&s=fast"


async function getData(filter) {
    const moviesWrapper = document.querySelector(".movies");
            
    const response = await fetch(api_url);
    const data = await response.json();

    const movies = data.Search

    if (filter === "OLDEST_TO_LATEST") {
        movies.sort((a, b) => parseFloat(a.Year) - parseFloat(b.Year));
    }
    else if (filter === "LATEST_TO_OLDEST") {
        movies.sort((a, b) => parseFloat(b.Year) - parseFloat(a.Year));
    }

    const moviesHtml = movies.map(movie => {
                return `<div class="movie">
            <figure class="movie__img--wrapper">
               <img src="${movie.Poster}" alt="" class="movie__img">
           </figure>
               <h4 class="movie__name">${movie.Title}</h4>
               <ul class="movie__info-list">
               <li class="movie__info">director</li>
               <li class="movie__info">${movie.Year}</li>
           </ul>
       </div>`
 }).join("")

moviesWrapper.innerHTML = moviesHtml
};

getData();

function filterMovies(event) {
        getData(event.target.value);
}
        
        
        
        
        
        



// fetch(api_url).then(response => response.json().then(data => {
//     console.log(data)
//     moviesWrapper.innerHTML = data.Title
//     console.log(data)

// }))