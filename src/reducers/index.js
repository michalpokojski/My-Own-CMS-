import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  auth,
  users,
  form: reduxFormReducer
})
