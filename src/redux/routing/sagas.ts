import { push } from 'connected-react-router';
import { put } from 'redux-saga/effects';
import { goToPage } from './actions';

export function* goToPageWorker({ path }: ReturnType<typeof goToPage>) {
  yield put(push(path));
}
