import { combineReducers } from 'redux'
import user from './user'
import users from './users'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  user,
  users,
  form: reduxFormReducer
})
