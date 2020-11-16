import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { InitialMoviesStateType, moviesReducer } from './movies/reducer';
import { InitialSelectedMovieStateType, selectedMovieReducer } from './selected-movie/reducer';

export type RootState = {
  router: RouterState
  movies: InitialMoviesStateType
  selectedMovie: InitialSelectedMovieStateType
}

export const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});
