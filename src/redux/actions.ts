import { REQUEST_MOVIES } from './types';

export default function getMovies(request: string) {
  return {
    type: REQUEST_MOVIES,
    request,
  };
}
