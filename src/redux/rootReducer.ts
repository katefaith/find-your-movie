import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import { selectedMovieReducer } from './selected-movie/reducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});

export default rootReducer;
