import { all, takeEvery } from 'redux-saga/effects';
import { goToPageWorker } from './routing/sagas';
import { getMoviesWorker } from './movies/sagas';
import { getMovieWorker } from './selected-movie/sagas';
import { RoutingActionTypes } from './routing/types';
import { MoviesActionTypes } from './movies/types';
import { SelectedMovieActionTypes } from './selected-movie/types';
import { addMovieWorker } from './add-movie/sagas';
import { AddMovieActionTypes } from './add-movie/types';

export function* rootSaga() {
  yield all([
    takeEvery(MoviesActionTypes.GET_MOVIES, getMoviesWorker),
    takeEvery(SelectedMovieActionTypes.GET_MOVIE, getMovieWorker),
    takeEvery(RoutingActionTypes.GO_TO_PAGE, goToPageWorker),
    takeEvery(AddMovieActionTypes.ADD_MOVIE, addMovieWorker),
  ]);
}
