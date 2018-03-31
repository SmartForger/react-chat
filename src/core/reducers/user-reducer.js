import { createReducer } from 'reduxsauce';

import { Types } from '../actions';

const initialState = {
  token: '',
  info: {}
}

const setToken = (state, { token }) => ({
  ...state,
  token
})

const setUserInfo = (state, { info }) => ({
  ...state,
  info
})

export default createReducer(initialState, {
  [Types.SET_TOKEN]: setToken,
  [Types.SET_USER_INFO]: setUserInfo
});
