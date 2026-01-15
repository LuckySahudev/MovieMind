// const apiKey = "cefc2076"; // replace with your OMDb API key
// const movieTitle = "Titanic";

// const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log("Movie Details:", data);
//     document.querySelector(".title").innerHTML = `Title is : ${data.Title}`;
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });

let moviesData = [];

// Fetch movies.json
fetch("data/movies.json")
  .then(response => response.json())
  .then(data => {
    moviesData = data;
  })
  .catch(error => {
    console.error("Error loading movies:", error);
  });

// Filter movies based on input
function filterMovies() {
  const industry = document.getElementById("industryInput").value.toLowerCase();
  const genre = document.getElementById("genreInput").value.toLowerCase();

  const filteredMovies = moviesData.filter(movie => {
    const industryMatch = movie.industry.toLowerCase().includes(industry);
    const genreMatch = movie.genres.some(g =>
      g.toLowerCase().includes(genre)
    );
    let x = industryMatch && genreMatch;
    console.log(x.length);
    return industryMatch && genreMatch;
  });

  displayMovies(filteredMovies);
}

// Display movies on page
function displayMovies(movies) {
  const container = document.getElementById("moviesContainer");
  container.innerHTML = "";

  if (movies.length === 0) {
    container.innerHTML = "<p>No movies found.</p>";
    return;
  }

  movies.forEach(movie => {
    const movieDiv = document.createElement("div");
    movieDiv.className = "movie";

    movieDiv.innerHTML = `
      <h3>${movie.title} (${movie.year})</h3>
      <p><strong>Industry:</strong> ${movie.industry}</p>
      <p><strong>Genres:</strong> ${movie.genres.join(", ")}</p>
      <p><strong>Rating:</strong> ⭐ ${movie.rating}</p>
    `;

    container.appendChild(movieDiv);
  });
}

