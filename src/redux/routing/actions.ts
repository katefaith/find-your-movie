import { RoutingActionTypes } from './types';

export function toMoviePage(movieTitle: string) {
  return {
    type: RoutingActionTypes.TO_MOVIE_PAGE,
    movieTitle,
  };
}

export function toSearchPage() {
  return {
    type: RoutingActionTypes.TO_SEARCH_PAGE,
  };
}
