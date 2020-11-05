import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { MoviesActionTypes } from './types';
import {
  getMovies, getMoviesStart, getMoviesFinish, getMoviesError,
} from './actions';

export function* getMoviesWatcher() {
  yield takeEvery(MoviesActionTypes.GET_MOVIES, getMoviesWorker);
}

function* getMoviesWorker({ request }: ReturnType<typeof getMovies>) {
  yield put(getMoviesStart()); // dispatch
  try {
    const response = yield call(fetchMovies, request); // await
    yield put(getMoviesFinish(response));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}

async function fetchMovies(request: string) {
  const response = await axios.get(`https://www.omdbapi.com/?s=${request}&type=movie&apikey=59c039f4`);
  console.log('response.data = ', response.data);
  return response.data.Search;
}
