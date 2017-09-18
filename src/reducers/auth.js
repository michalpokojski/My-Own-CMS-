const LOGIN_USER = 'users/LOGIN_USER'
const LOGOUT_USER = 'users/LOGOUT_USER'

const logInUser = userAuth => ({
  type: LOGIN_USER,
  userAuth
})

const logOutUser = () => ({
  type: LOGOUT_USER
})

const initialState = {
  user: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.userAuth
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

export { logOutUser, logInUser }