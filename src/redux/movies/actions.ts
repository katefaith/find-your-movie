import { MoviesActionTypes } from './types';

export const getMovies = (request: string, searchType: string) => ({
  type: MoviesActionTypes.GET_MOVIES,
  request,
  searchType,
});

export const getMoviesStart = () => ({
  type: MoviesActionTypes.GET_MOVIES_START,
});

export const getMoviesFinish = (movies) => ({
  type: MoviesActionTypes.GET_MOVIES_FINISH,
  movies,
});

export const getMoviesError = (error) => ({
  type: MoviesActionTypes.GET_MOVIES_ERROR,
  error,
});

export const setSortByFilter = (field) => ({
  type: MoviesActionTypes.SET_SORT_BY_FILTER,
  sortBy: field,
});

export const selectMovie = (selectedMovieId) => ({
  type: MoviesActionTypes.SELECT_MOVIE,
  selectedMovieId,
});

export const clearMovies = () => ({
  type: MoviesActionTypes.CLEAR_MOVIES,
});
