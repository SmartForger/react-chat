import ActionTypes from '../actions/types';

const initialState = {
  loading: false
}

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.API_ATTEMPT:
      return Object.assign({}, state, {
        loading: true
      })
    case ActionTypes.API_SUCCESS:
      return Object.assign({}, state, {
        loading: false
      })
    case ActionTypes.API_FAILED:
      return Object.assign({}, state, {
        loading: false
      })
    default:
      return state
  }
}

export default apiReducer;