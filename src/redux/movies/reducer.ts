import { MovieType } from '../../components/results-body/results-body';
import { MoviesActionTypes } from './types';
import * as actions from './actions';

type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type InitialMoviesStateType = {
  movies: MovieType[]
  isFetching: boolean
  sortBy: string
  selectedMovieId: string
}

const initialState = {
  movies: [],
  isFetching: false,
  sortBy: 'Title',
  selectedMovieId: '',
};

// eslint-disable-next-line max-len
export const moviesReducer = (state = initialState, action: ActionTypes): InitialMoviesStateType => {
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

    case MoviesActionTypes.CLEAR_MOVIES:
      return { ...state, movies: [] };

    default:
      return state;
  }
};
