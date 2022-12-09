import "../components/nav-bar.js";
import "../components/movie-list.js";
import DataSource  from "../data/data-source";

const main = () => {
  const searchElement = document.querySelector("nav-bar");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearch = () => {
    DataSource.searchMovie(searchElement.value)
      .then(renderResult)
      .catch(displayMovie);
  }

  const displayMovie = () => {
    DataSource.getMovie()
      .then(renderResult)
      .catch(fallbackResult);
  }

  const renderResult = results => {
    movieListElement.movies = results;
  }

  const fallbackResult = message => {
    movieListElement.renderError(message);
  }


  searchElement.clickEvent = onButtonSearch;
  displayMovie();
};


export default main;