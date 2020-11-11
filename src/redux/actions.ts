import { MoviesActionTypes } from './types';

export function getMovies(request: string, searchType: string) {
  return {
    type: MoviesActionTypes.GET_MOVIES,
    request,
    searchType,
  };
}

export function getMoviesStart() {
  return {
    type: MoviesActionTypes.GET_MOVIES_START,
  };
}

export function getMoviesFinish(movies) {
  return {
    type: MoviesActionTypes.GET_MOVIES_FINISH,
    movies,
  };
}

export function getMoviesError(error) {
  return {
    type: MoviesActionTypes.GET_MOVIES_ERROR,
    error,
  };
}

export function setSortByFilter(field) {
  return {
    type: MoviesActionTypes.SET_SORT_BY_FILTER,
    sortBy: field,
  };
}

export function selectMovie(selectedMovieId) {
  return {
    type: MoviesActionTypes.SELECT_MOVIE,
    selectedMovieId,
  };
}
