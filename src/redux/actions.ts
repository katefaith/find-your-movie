import { REQUEST_MOVIES } from './types';

export default function fetchMovies() {
  return {
    type: REQUEST_MOVIES,
  };
}
