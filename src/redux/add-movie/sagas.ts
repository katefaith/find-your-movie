import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { AddMovieType } from '../../components/add-movie/add-move';
import { showNotification } from '../notifications/actions';
import { addMovie, addMovieError } from './actions';

export function* addMovieWorker({ data }: ReturnType<typeof addMovie>) {
  try {
    const response = yield call(postMovie, data);
    yield put(showNotification(response.text, response.status));
  } catch (error) {
    yield put(addMovieError(error));
    yield put(showNotification('Something went wrong!', 'error'));
  }
}

async function postMovie(data: AddMovieType) {
  const response = await axios.post('http://localhost:3000/add-movie', data);
  return response.data;
}
