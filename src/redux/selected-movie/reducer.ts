import { SelectedMovieType } from '../../components/movie/movie';
import { SelectedMovieActionTypes } from './types';
import * as actions from './actions';

type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type InitialSelectedMovieStateType = {
  data: SelectedMovieType
  isFetching: boolean
};

const initialState = {
  data: null,
  isFetching: false,
};

// eslint-disable-next-line max-len
export const selectedMovieReducer = (state = initialState, action: ActionTypes): InitialSelectedMovieStateType => {
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
