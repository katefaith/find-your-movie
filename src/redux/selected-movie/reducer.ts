import { SelectedMovieActionTypes } from './types';

const initialState = {
  data: {},
  isFetching: false,
};

export const selectedMovieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SelectedMovieActionTypes.GET_MOVIE_FINISH:
      return { ...state, data: action.data, isFetching: false };

    case SelectedMovieActionTypes.GET_MOVIE_START:
      return { ...state, isFetching: true };

    case SelectedMovieActionTypes.GET_MOVIE_ERROR:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
