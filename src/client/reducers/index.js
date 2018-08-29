// 2 sent to client and createStore
import { combineReducers } from 'redux'

import userReducer from './usersReducer'
import authReducer from './authReducer'
import adminsReducer from './adminsReducer' // 3c from adminsReducer

export default combineReducers({
  users: userReducer,
  auth: authReducer,
  admins: adminsReducer
})
