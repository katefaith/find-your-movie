import { RoutingActionTypes } from './types';

const initialState = {
  movieId: '',
};

export const selectMovieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RoutingActionTypes.SELECT_MOVIE:
      return { ...state, movieId: action.movieId };
    default:
      return state;
  }
};
