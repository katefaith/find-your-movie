import { RoutingActionTypes } from './types';

export function selectMovie(movieTitle: string, movieId: string) {
  return {
    type: RoutingActionTypes.SELECT_MOVIE,
    movieTitle,
    movieId,
  };
}

export function toSearchPage() {
  return {
    type: RoutingActionTypes.TO_SEARCH_PAGE,
  };
}
