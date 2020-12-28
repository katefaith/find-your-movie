import { createSelector } from 'reselect';
import { MovieType } from '../../components/results-body/results-body';
import { RootState } from '../rootReducer';

const getMovies = (state: RootState) => state.movies.movies;
const getSortBy = (state: RootState): string => state.movies.sortBy;

export const getIsFetching = (state: RootState): boolean => state.movies.isFetching;
export const getMoviesCount = (state: RootState): number => state.movies.movies.length;
export const getMovieId = (state: RootState): string => state.movies.selectedMovieId;

export const getSortedMovies = createSelector(
  [getMovies, getSortBy],
  (movies, sortBy) => {
    switch (sortBy) {
      case 'Title':
        return [...movies].sort((a, b) => ((a.Title < b.Title) ? -1 : 1));
      case 'Year':
        return [...movies].sort((a, b) => ((Number(a.Year.split('–')[0]) < Number(b.Year.split('–')[0])) ? -1 : 1));
      default:
        return movies;
    }
  },
);

export const getFilteredMovies = createSelector(
  [getMovies, getMovieId],
  (movies, movieId) => movies.filter((movie: MovieType) => movie.imdbID !== movieId),
);
