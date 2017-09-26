import { combineReducers } from 'redux'
import auth from './auth'
import userOperations from './usersOperations'
import { reducer as reduxFormReducer } from 'redux-form'
import filters from './filters'

export default combineReducers({
  auth,
  filters,
  userOperations,
  form: reduxFormReducer
})
