let movies = [];

// Load movies.json once
fetch("./data/movies.json")
  .then(response => response.json())
  .then(data => {
    movies = data;
    console.log("Movies loaded:", movies);
  })
  .catch(error => {
    console.error("Error loading movies:", error);
  });

// Example filter + render
document
  .getElementById("showHollywoodDrama")
  .addEventListener("click", () => {

    const filteredMovies = movies.filter(movie =>
      movie.industry === "Hollywood" &&
      movie.genres.includes("Drama")
    );

    renderMovies(filteredMovies);
  });

function renderMovies(movieArray) {
  const container = document.getElementById("movieList");
  container.innerHTML = "";

  if (movieArray.length === 0) {
    container.innerHTML = "<p>No movies found.</p>";
    return;
  }

  movieArray.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie";

    div.innerHTML = `
      <h3>${movie.title}</h3>
      <p><strong>Industry:</strong> ${movie.industry}</p>
      <p><strong>Genres:</strong> ${movie.genres.join(", ")}</p>
      <p><strong>Era:</strong> ${movie.era}</p>
      <p><strong>Rating:</strong> ${movie.rating}</p>
    `;

    container.appendChild(div);
  });
}
