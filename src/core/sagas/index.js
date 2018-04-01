import { all } from 'redux-saga/effects';
import authSaga from './auth.saga';
import chatsSaga from '../../home/sagas';

function* rootSaga() {
  yield all([
    authSaga(),
    chatsSaga()
  ]);
}

export default rootSaga;