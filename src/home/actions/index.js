import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setChannels: ['channels'],
  setDirectChannels: ['directChannels'],
  addMessages: ['msgs'],
  getChatsAttempt: null
});