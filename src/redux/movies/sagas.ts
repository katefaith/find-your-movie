import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import {
  getMovies, getMoviesStart, getMoviesFinish, getMoviesError,
} from './actions';

export function* getMoviesWorker({ request, searchType }: ReturnType<typeof getMovies>) {
  yield put(getMoviesStart()); // dispatch
  try {
    const response = yield call(fetchMovies, request, searchType); // await
    yield put(getMoviesFinish(response));
    yield put(push(`/search/${request}`));

    // if (response.Search) {
    //   yield put(getMoviesFinish(response.Search));
    //   yield put(push(`/search/${request}`));
    // } else {
    //   yield put(getMoviesFinish([]));
    // }

    // if (response.Error) {
    //   throw new Error(response.Error);
    // }
    // yield put(getMoviesFinish(response.Search));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}

// async function fetchMovies(request: string, searchType: string) {
//   const response = await axios.get(`https://www.omdbapi.com/?s=${request}&type=${searchType}&apikey=59c039f4`);
//   return response.data;
// }

async function fetchMovies(request: string, searchType: string) {
  const response = await axios.get(`http://localhost:3000/search?type=${searchType}&request=${request}`);
  return response.data;
}
