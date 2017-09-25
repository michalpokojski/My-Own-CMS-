import { combineReducers } from 'redux'
import auth from './auth'
import addNewUser from './addNewUser'
import { reducer as reduxFormReducer } from 'redux-form'
import filters from './filters'

export default combineReducers({
  auth,
  filters,
  addNewUser,
  form: reduxFormReducer
})
