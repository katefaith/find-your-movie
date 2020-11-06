import { createSelector } from 'reselect';

type RootState = {
  movies: {
    movies: any
    isFetching: boolean
    sortBy: string
  }
}

const getMovies = (state: RootState) => state.movies.movies;
const getSortBy = (state: RootState): string => state.movies.sortBy;

export const getIsFetching = (state: RootState): boolean => state.movies.isFetching;
export const getNumberOfMovies = (state: RootState): number => state.movies.movies.length;

export const getSortedMovies = createSelector(
  [getMovies, getSortBy],
  (movies, sortBy) => {
    switch (sortBy) {
      case 'Title':
        return [...movies].sort((a, b) => ((a.Title < b.Title) ? -1 : 1));
      case 'Year':
        return [...movies].sort((a, b) => ((Number(a.Year) < Number(b.Year)) ? -1 : 1));
      default:
        return movies;
    }
  },
);
