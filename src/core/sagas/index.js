import { all } from 'redux-saga/effects';
import authSaga from './auth.saga';
import chatsSaga from '../../home/sagas';
import workspaceSaga from '../../workspace/sagas';

function* rootSaga() {
  yield all([
    authSaga(),
    chatsSaga(),
    workspaceSaga()
  ]);
}

export default rootSaga;