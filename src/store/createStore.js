import {createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default initialState => {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk
      ),
      persistState(['user'], {key : 'users'})
    ))
}
