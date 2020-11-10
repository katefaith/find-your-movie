import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  getMovie, getMovieError, getMovieFinish, getMovieStart,
} from './actions';
import { SelectedMovieActionTypes } from './types';

export function* getMovieWatcher() {
  yield takeEvery(SelectedMovieActionTypes.GET_MOVIE, getMovieWorker);
}

function* getMovieWorker({ movieId }: ReturnType<typeof getMovie>) {
  yield put(getMovieStart());
  try {
    const response = yield call(fetchMovie, movieId);
    yield put(getMovieFinish(response));
  } catch (error) {
    yield put(getMovieError(error));
  }
}

async function fetchMovie(movieId: string) {
  const response = await axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=59c039f4`);
  return response.data;
}
