const API_KEY = "9226d2cbb7ed48fe3f3e70d3c7574602";
const BASE_URL = "https://api.themoviedb.org/";
const URL_RATED = `${BASE_URL}3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const getQuery = (query, actions) => {
  let url = null;
  if (query) {
    url = `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${query}`;
  } else {
    url = URL_RATED;
  }
  fetch(url)
    .then((res) => res.json())
    .then((data) => actions(data.results));
};
