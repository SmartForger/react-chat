import { createReducer } from 'reduxsauce';

import { Types } from '../actions';

const initialState = {
  loading: false
}

const setLoading = (loading) => (state) => ({
  ...state,
  loading
})

export default createReducer(initialState, {
  [Types.API_ATTEMPT]: setLoading(true),
  [Types.API_SUCCESS]: setLoading(false),
  [Types.API_FAILED]: setLoading(false)
})
