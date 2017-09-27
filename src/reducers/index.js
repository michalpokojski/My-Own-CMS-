import { combineReducers } from 'redux'
import auth from './auth'
import userOperations from './usersOperations'
import { reducer as reduxFormReducer } from 'redux-form'
import userRemove from './userRemove'

export default combineReducers({
  auth,
  userRemove,
  userOperations,
  form: reduxFormReducer
})
