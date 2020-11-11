import { push } from 'connected-react-router';
import { put, takeEvery } from 'redux-saga/effects';
import { toMoviePage } from './actions';
import { RoutingActionTypes } from './types';

export function* goToSearchPageWatcher() {
  yield takeEvery(RoutingActionTypes.TO_SEARCH_PAGE, goToSearchPageWorker);
}

function* goToSearchPageWorker() {
  try {
    yield put(push('/'));
  } catch (error) {
    console.log(error);
  }
}

export function* goToMoviePageWatcher() {
  yield takeEvery(RoutingActionTypes.TO_MOVIE_PAGE, goToMoviePageWorker);
}

function* goToMoviePageWorker({ movieTitle }: ReturnType<typeof toMoviePage>) {
  try {
    yield put(push(`/movie/${movieTitle}`));
  } catch (error) {
    console.log(error);
  }
}
