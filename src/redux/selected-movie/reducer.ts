import { SelectedMovieActionTypes } from './types';

const initialState = {
  selectedMovie: {},
  isFetching: false,
};

export const selectedMovieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SelectedMovieActionTypes.GET_MOVIE_FINISH:
      return { ...state, selectedMovie: action.selectedMovie, isFetching: false };

    case SelectedMovieActionTypes.GET_MOVIE_START:
      return { ...state, isFetching: true };

    case SelectedMovieActionTypes.GET_MOVIE_ERROR:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
