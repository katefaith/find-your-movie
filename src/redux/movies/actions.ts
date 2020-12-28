import { MovieType } from '../../components/results-body/results-body';
import { MoviesActionTypes } from './types';

export const getMovies = (request: string, searchType: string) => ({
  type: MoviesActionTypes.GET_MOVIES,
  request,
  searchType,
});

export const getMoviesStart = () => ({
  type: MoviesActionTypes.GET_MOVIES_START,
});

export const getMoviesFinish = (movies: MovieType[]) => ({
  type: MoviesActionTypes.GET_MOVIES_FINISH,
  movies,
});

export const getMoviesError = (error: string) => ({
  type: MoviesActionTypes.GET_MOVIES_ERROR,
  error,
});

export const setSortByFilter = (field: string) => ({
  type: MoviesActionTypes.SET_SORT_BY_FILTER,
  sortBy: field,
});

export const selectMovie = (selectedMovieId: string) => ({
  type: MoviesActionTypes.SELECT_MOVIE,
  selectedMovieId,
});

export const clearMovies = () => ({
  type: MoviesActionTypes.CLEAR_MOVIES,
});
