import { SelectedMovieActionTypes } from './types';

export const getMovie = (movieId: string) => ({
  type: SelectedMovieActionTypes.GET_MOVIE,
  movieId,
});

export const getMovieStart = () => ({
  type: SelectedMovieActionTypes.GET_MOVIE_START,
});

export const getMovieFinish = (data) => ({
  type: SelectedMovieActionTypes.GET_MOVIE_FINISH,
  data,
});

export const getMovieError = (error) => ({
  type: SelectedMovieActionTypes.GET_MOVIE_ERROR,
  error,
});
