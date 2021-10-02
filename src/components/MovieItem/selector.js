import { createSelector } from 'reselect'

const getMovies = (state) => state.movies.movies;

const getId = (_, id) => id;

export const getMovieSelector = createSelector(
    getMovies,
    getId,
    (movies, id) => movies.filter((movie) => movie.id === Number(id))
)
