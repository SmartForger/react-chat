import ActionTypes from '../actions/types';

const initialState = {
  token: '',
  info: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      })
    case ActionTypes.SET_USER:
      return Object.assign({}, state, {
        info: action.info
      })
    default:
      return state
  }
}

export default userReducer;