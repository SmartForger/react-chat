import { createReducer } from 'reduxsauce';
import { eqProps, differenceWith } from 'ramda';

import { Types } from '../actions';

const initialState = {
  workspaces: [],
}


const getWorkspacesSuccess = (state, { workspaces }) => ({
  ...state,
  workspaces
})

export default createReducer(initialState, {
  [Types.GET_WORKSPACES_SUCCESS]: getWorkspacesSuccess,
})