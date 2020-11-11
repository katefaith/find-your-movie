import { push } from 'connected-react-router';
import { put, takeEvery } from 'redux-saga/effects';
import { selectMovie } from './actions';
import { RoutingActionTypes } from './types';

export function* selectMovieWatcher() {
  yield takeEvery(RoutingActionTypes.SELECT_MOVIE, selectMovieWorker);
}

function* selectMovieWorker({ movieTitle }: ReturnType<typeof selectMovie>) {
  try {
    yield put(push(`/movie/${movieTitle}`));
  } catch (error) {
    console.log(error);
  }
}

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
