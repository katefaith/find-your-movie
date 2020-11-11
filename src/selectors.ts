import { createSelector } from 'reselect';

type RootState = {
  router: {
    location: {
      pathname: string
    }
  }
  movies: {
    movies: any
    isFetching: boolean
    sortBy: string
  }
  selectedMovieId: {
    movieId: string
  }
  selectedMovie: {
    selectedMovie: any
  }
}

const getMovies = (state: RootState) => state.movies.movies;
const getSortBy = (state: RootState): string => state.movies.sortBy;

export const getIsFetching = (state: RootState): boolean => state.movies.isFetching;
export const getMoviesCount = (state: RootState): number => state.movies.movies.length;
export const getMovieId = (state: RootState): string => state.selectedMovieId.movieId;
export const getSelectedMovie = (state: RootState): any => state.selectedMovie.selectedMovie;

export const getCurrentPathname = (state: RootState): string => state.router.location.pathname;

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
