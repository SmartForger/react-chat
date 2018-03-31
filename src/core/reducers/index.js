import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux'

import apiReducer from './api-reducer';
import userReducer from './user-reducer';
import chatsReducer from '../../home/reducers'

export default combineReducers({
  api: apiReducer,
  chats: chatsReducer,
  user: userReducer,
  form: formReducer,
  toastr: toastrReducer,
  routing: routerReducer
})
