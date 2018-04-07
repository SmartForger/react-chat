import { put, select, takeLatest } from 'redux-saga/effects'

import { getWorkspaces, sendEmail } from '../../core/api';
import { Creators as CoreActions } from '../../core/actions';
import { Types as ChatTypes, Creators as ChatActions } from '../actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getWorkspacesAttempt({ data }) {
  try {
    const { user } = yield select();
    const { data: response } = yield getWorkspaces();
    yield put(CoreActions.apiSuccess());
    yield put(ChatActions.getWorkspacesSuccess(response));
  } catch (err) {
    yield put(CoreActions.apiFailed());
  }
}

function* sendEmailAttempt({ email }) {
  try {
    console.log('sending email...');
    const { data: response } = yield sendEmail(email);
    yield put(CoreActions.apiSuccess());
    console.log(response);
  } catch ( err ) {
    yield put(CoreActions.apiFailed());
  }
}

function* chatsSaga() {
  yield takeLatest(ChatTypes.GET_WORKSPACES_ATTEMPT, getWorkspacesAttempt);
  yield takeLatest(ChatTypes.SEND_EMAIL_ATTEMPT, sendEmailAttempt);
}

export default chatsSaga;