import { call, put, takeLatest } from 'redux-saga/effects'
import {toastr} from 'react-redux-toastr';
import { push } from 'react-router-redux';

import { loginUser, registerUser } from '../api';
import { apiFailed, apiSuccess, setUserInfo, setToken } from '../actions';
import ActionTypes from '../actions/types';

function* handleSuccess(response) {
  yield put(apiSuccess());
  yield put(setUserInfo(response.user));
  yield put(setToken(response.token));
  toastr.success('Welcome ' + response.user.name + '!');
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* registerUserAttempt({ data }) {
  try {
    const { data: response } = yield registerUser(data);
    yield call(handleSuccess, response);
    toastr.success('Welcome ' + response.user.name + '!');
  } catch (err) {
    yield put(apiFailed());
    toastr.error('Registration Failed', err.response.data);
  }
}

function* loginUserAttempt({ data }) {
  try {
    const { data: response } = yield loginUser(data);
    yield call(handleSuccess, response);
    yield put(push('/'));
  } catch (err) {
    yield put(apiFailed());
    toastr.error('Login Failed', err.response.data);
  }
}

function* rootSaga() {
  yield takeLatest(ActionTypes.REGISTER_USER_ATTEMPT, registerUserAttempt);
  yield takeLatest(ActionTypes.LOGIN_USER_ATTEMPT, loginUserAttempt);
}

export default rootSaga;