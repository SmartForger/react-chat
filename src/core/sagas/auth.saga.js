import { call, put, takeLatest } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr';
import { push } from 'react-router-redux';

import { loginUser, registerUser } from '../api';
import { Types, Creators } from '../actions';

function* handleSuccess(response) {
  yield put(Creators.apiSuccess());
  yield put(Creators.setUserInfo(response.user));
  yield put(Creators.setToken(response.token));
  toastr.success('Welcome ' + response.user.name + '!');
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* registerUserAttempt({ data }) {
  try {
    const { data: response } = yield registerUser(data);
    yield call(handleSuccess, response);
    toastr.success('Welcome ' + response.user.name + '!');
  } catch (err) {
    yield put(Creators.apiFailed());
    toastr.error('Registration Failed', err.response.data);
  }
}

function* loginUserAttempt({ data }) {
  try {
    const { data: response } = yield loginUser(data);
    yield call(handleSuccess, response);
    yield put(push('/'));
  } catch (err) {
    yield put(Creators.apiFailed());
    if (err.response) {
      toastr.error('Login Failed', err.response.data);
    } else {
      toastr.error('Login Failed', 'Network error');
    }
  }
}

function* authSaga() {
  yield takeLatest(Types.REGISTER_USER_ATTEMPT, registerUserAttempt);
  yield takeLatest(Types.LOGIN_USER_ATTEMPT, loginUserAttempt);
}

export default authSaga;