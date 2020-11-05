type RootState = {
  movies: {
    movies: any
    isFetching: boolean
  }
}

export const moviesSelector = (state: RootState) => state.movies.movies;
export const isFetchingSelector = (state: RootState): boolean => state.movies.isFetching;
export const numberOfMoviesSelector = (state: RootState): number => state.movies.movies.length;
