// @flow

import { all } from 'redux-saga/effects';
import authSaga from '../state/auth/sagas';

export default function*(): Generator<*, *, *> {
  yield all([
    authSaga()
  ]);
}
