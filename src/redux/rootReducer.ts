import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movies: moviesReducer,
});

export default rootReducer;
