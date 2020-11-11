import { RoutingActionTypes } from './types';

const initialState = {
  movieId: '',
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RoutingActionTypes.TO_MOVIE_PAGE:
      return state;
    case RoutingActionTypes.TO_SEARCH_PAGE:
      return state;
    default:
      return state;
  }
};
