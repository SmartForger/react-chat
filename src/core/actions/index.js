import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setToken: ['token'],                // SET_TOKEN
  setUserInfo: ['info'],              // SET_USER_INFO
  apiAttempt: null,
  apiSuccess: null,
  apiFailed: null,
  registerUserAttempt: ['data'],      // REGISTER_USER_ATTEMPT
  loginUserAttempt: ['data']          // LOGIN_USER_ATTEMPT
})
