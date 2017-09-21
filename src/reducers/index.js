import { combineReducers } from 'redux'
import auth from './auth'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  auth,
  form: reduxFormReducer
})
