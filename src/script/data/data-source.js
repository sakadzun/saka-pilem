const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "?api_key=cdee6461912662764ad2212c2e1c691f";
const searchValue = `${baseUrl}search/movie${apiKey}&query=`;


class DataSource {
  static getMovie() {
    return fetch(`${baseUrl}/movie/latest${apiKey}`)
    .then(response => response.json())
    .then(responseJson => {
      if(responseJson.results) {
        return Promise.resolve(responseJson.results);
      }  else {
        return Promise.reject(`movie is not found`);
      }
    });
  };

  static searchMovie(keyword) {
    return fetch(`${searchValue + keyword}`)
    .then(response => response.json())
    .then(responseJson => {
      if(responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  };
};


export default DataSource;