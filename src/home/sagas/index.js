import { put, select, takeLatest } from 'redux-saga/effects'

import { getChats } from '../../core/api';
import { Creators as CoreActions } from '../../core/actions';
import { Types as ChatTypes, Creators as ChatActions } from '../actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getChatsAttempt({ data }) {
  try {
    const { user } = yield select();
    const { data: response } = yield getChats(user.token);
    yield put(CoreActions.apiSuccess());
    yield put(ChatActions.addMessages(response));
  } catch (err) {
    yield put(CoreActions.apiFailed());
  }
}

function* chatsSaga() {
  yield takeLatest(ChatTypes.GET_CHATS_ATTEMPT, getChatsAttempt);
}

export default chatsSaga;