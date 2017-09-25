import { combineReducers } from 'redux'
import auth from './auth'
import userEdit from './userEdit'
import addNewUser from './addNewUser'
import { reducer as reduxFormReducer } from 'redux-form'
import filters from './filters'

export default combineReducers({
  auth,
  filters,
  addNewUser,
  userEdit,
  form: reduxFormReducer
})
