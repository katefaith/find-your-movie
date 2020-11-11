import { all } from 'redux-saga/effects';
import { goToSearchPageWatcher, selectMovieWatcher } from './routing/sagas';
import { getMoviesWatcher } from './sagas';
import { getMovieWatcher } from './selected-movie/sagas';

export function* rootSaga() {
  yield all([
    getMoviesWatcher(),
    selectMovieWatcher(),
    goToSearchPageWatcher(),
    getMovieWatcher(),
  ]);
}
