import { API_URL } from "./config.js";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

async function fetchMovieDetails(id) {
  try {
    const response = await fetch(`${API_URL}&i=${id}`);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovieDetails(data);
    } else {
      console.error("Error fetching movie details:", data.Error);
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}
<script src="js/details.js" type="module"></script>;

function displayMovieDetails(movie) {}

if (movieId) {
  fetchMovieDetails(movieId);
}
