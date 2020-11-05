import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_MOVIES, REQUEST_MOVIES } from './types';

export default function* sagaWatcher() {
  yield takeEvery(REQUEST_MOVIES, sagaWorker);
}

function* sagaWorker() {
  try {
    const payload = yield call(fetchMovies);
    yield put({ type: FETCH_MOVIES, payload });
  } catch (e) {
    console.log(e);
  }
}

async function fetchMovies() {
  const response = await axios.get('https://www.omdbapi.com/?s=sun&type=movie&apikey=59c039f4');
  console.log('response.data = ', response.data);
  return response.data.Search;
}
