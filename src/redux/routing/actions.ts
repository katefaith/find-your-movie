import { RoutingActionTypes } from './types';

export function selectMovie(movieTitle: string, movieId: string) {
  return {
    type: RoutingActionTypes.SELECT_MOVIE,
    movieTitle,
    movieId,
  };
}
