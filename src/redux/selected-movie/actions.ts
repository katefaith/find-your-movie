import { SelectedMovieActionTypes } from './types';

export function getMovie(movieId: string) {
  return {
    type: SelectedMovieActionTypes.GET_MOVIE,
    movieId,
  };
}

export function getMovieStart() {
  return {
    type: SelectedMovieActionTypes.GET_MOVIE_START,
  };
}

export function getMovieFinish(data) {
  return {
    type: SelectedMovieActionTypes.GET_MOVIE_FINISH,
    data,
  };
}

export function getMovieError(error) {
  return {
    type: SelectedMovieActionTypes.GET_MOVIE_ERROR,
    error,
  };
}
