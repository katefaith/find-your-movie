import { all } from 'redux-saga/effects';
import { selectMovieWatcher } from './routing/sagas';
import { getMoviesWatcher } from './sagas';

export function* rootSaga() {
  yield all([
    getMoviesWatcher(),
    selectMovieWatcher(),
  ]);
}
