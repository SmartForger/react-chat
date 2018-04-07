import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getWorkspacesAttempt: null,
  getWorkspacesSuccess: ['workspaces'],
  sendEmailAttempt: ['email'],
});