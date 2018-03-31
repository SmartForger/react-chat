import { createReducer } from 'reduxsauce';
import { eqProps, differenceWith } from 'ramda';

import { Types } from '../actions';

const initialState = {
  channels: [],
  directChannels: [],
  messages: []
}

const setChannels = (state, { channels }) => ({
  ...state,
  channels
})

const setDirectChannels = (state, { directChannels }) => ({
  ...state,
  directChannels
})

const addMessages = (state, { msgs }) => {
  const diffs = differenceWith(eqProps('id'), state.messages, msgs);
  return {
    ...state,
    messages: [
      ...diffs,
      ...msgs
    ]
  };
}

export default createReducer(initialState, {
  [Types.SET_CHANNELS]: setChannels,
  [Types.SET_DIRECT_CHANNELS]: setDirectChannels,
  [Types.ADD_MESSAGES]: addMessages
})