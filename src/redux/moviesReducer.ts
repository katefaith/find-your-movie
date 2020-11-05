import { MoviesActionTypes } from './types';

const initialState = {
  movies: [],
  isFetching: false,
};

const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MoviesActionTypes.GET_MOVIES_FINISH:
      return { ...state, movies: action.movies, isFetching: false };

    case MoviesActionTypes.GET_MOVIES_START:
      return { ...state, isFetching: true };

    case MoviesActionTypes.GET_MOVIES_ERROR:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};

export default moviesReducer;
