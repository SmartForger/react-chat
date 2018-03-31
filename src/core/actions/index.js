import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setToken: ['token'],
  setUserInfo: ['info'],
  apiAttempt: null,
  apiSuccess: null,
  apiFailed: null,
  registerUserAttempt: ['data'],
  loginUserAttempt: ['data']
})
