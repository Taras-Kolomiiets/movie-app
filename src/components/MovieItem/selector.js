import { createSelector } from "reselect";

const getMovies = (state) => state.movies;

const getId = (_, id) => id;

export const getMovieSelector = createSelector(getMovies, getId, (movies, id) =>
  movies.movies.filter((movie) => movie.id === Number(id))
);
