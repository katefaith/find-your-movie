import { RoutingActionTypes } from './types';

export function selectMovie(movieTitle: string) {
  return {
    type: RoutingActionTypes.SELECT_MOVIE,
    movieTitle,
  };
}
