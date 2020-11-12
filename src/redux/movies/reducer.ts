import { MoviesActionTypes } from './types';

const initialState = {
  movies: [],
  isFetching: false,
  sortBy: 'Title',
  selectedMovieId: '',
};

export const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MoviesActionTypes.GET_MOVIES_FINISH:
      return { ...state, movies: action.movies, isFetching: false };

    case MoviesActionTypes.GET_MOVIES_START:
      return { ...state, isFetching: true };

    case MoviesActionTypes.GET_MOVIES_ERROR:
      return { ...state, isFetching: false };

    case MoviesActionTypes.SET_SORT_BY_FILTER:
      return { ...state, sortBy: action.sortBy };

    case MoviesActionTypes.SELECT_MOVIE:
      return { ...state, selectedMovieId: action.selectedMovieId };

    default:
      return state;
  }
};
