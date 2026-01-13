const apiKey = "cefc2076"; // replace with your OMDb API key
const movieTitle = "Titanic";

const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Movie Details:", data);
    document.querySelector(".title").innerHTML = `Title is : ${data.Title}`;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
