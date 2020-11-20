import { AddMovieType } from '../../components/add-movie/add-move';
import { AddMovieActionTypes } from './types';

export const addMovie = (data: AddMovieType) => ({
  type: AddMovieActionTypes.ADD_MOVIE,
  data,
});

export const addMovieError = (error: string) => ({
  type: AddMovieActionTypes.ADD_MOVIE_ERROR,
  error,
});
