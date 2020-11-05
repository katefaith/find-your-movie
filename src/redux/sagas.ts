import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_MOVIES, REQUEST_MOVIES } from './types';
import getMovies from './actions';

export default function* sagaWatcher() {
  yield takeEvery(REQUEST_MOVIES, sagaWorker);
}

function* sagaWorker({ request }: ReturnType<typeof getMovies>) {
  try {
    const payload = yield call(fetchMovies, request);
    yield put({ type: FETCH_MOVIES, payload });
  } catch (e) {
    console.log(e);
  }
}

async function fetchMovies(request: string) {
  const response = await axios.get(`https://www.omdbapi.com/?s=${request}&type=movie&apikey=59c039f4`);
  console.log('response.data = ', response.data);
  return response.data.Search;
}
