import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'
import filters from './filters'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  auth,
  users,
  filters,
  form: reduxFormReducer
})
