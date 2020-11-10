import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import { selectMovieReducer } from './routing/selectMovieReducer';
import { selectedMovieReducer } from './selected-movie/reducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movies: moviesReducer,
  selectedMovieId: selectMovieReducer,
  selectedMovie: selectedMovieReducer,
});

export default rootReducer;
