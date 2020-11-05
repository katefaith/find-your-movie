import { MoviesActionTypes } from './types';

export function getMovies(request: string) {
  return {
    type: MoviesActionTypes.GET_MOVIES,
    request,
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
