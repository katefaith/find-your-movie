import { RoutingActionTypes } from './types';

const initialState = {
  movieTitle: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RoutingActionTypes.SELECT_MOVIE:
      return { ...state, movieTitle: action.movieTitle };
    default:
      return state;
  }
};
