import { createSelector } from "reselect";

const getMovies = (state) => state.movies;

export const getMoviesSelector = createSelector(
  getMovies,
  (movies) => movies.movies
);
