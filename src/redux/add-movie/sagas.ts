import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { AddMovieType } from '../../components/add-movie/add-move';
import { addMovie, addMovieError } from './actions';

export function* addMovieWorker({ data }: ReturnType<typeof addMovie>) {
  try {
    yield call(postMovie, data);
  } catch (error) {
    yield put(addMovieError(error));
  }
}

async function postMovie(data: AddMovieType) {
  await axios.post('http://localhost:3000/add-movie', data);
}
