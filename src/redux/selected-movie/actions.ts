import { SelectedMovieType } from '../../components/movie/movie';
import { SelectedMovieActionTypes } from './types';

export const getMovie = (movieId: string) => ({
  type: SelectedMovieActionTypes.GET_MOVIE,
  movieId,
});

export const getMovieStart = () => ({
  type: SelectedMovieActionTypes.GET_MOVIE_START,
});

export const getMovieFinish = (data: SelectedMovieType) => ({
  type: SelectedMovieActionTypes.GET_MOVIE_FINISH,
  data,
});

export const getMovieError = (error: string) => ({
  type: SelectedMovieActionTypes.GET_MOVIE_ERROR,
  error,
});
