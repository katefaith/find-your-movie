import { all } from 'redux-saga/effects';
import { goToMoviePageWatcher, goToSearchPageWatcher } from './routing/sagas';
import { getMoviesWatcher } from './sagas';
import { getMovieWatcher } from './selected-movie/sagas';

export function* rootSaga() {
  yield all([
    getMoviesWatcher(),
    goToMoviePageWatcher(),
    goToSearchPageWatcher(),
    getMovieWatcher(),
  ]);
}
