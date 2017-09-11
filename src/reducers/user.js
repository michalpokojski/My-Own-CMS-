import users from '../data/users.json'

const LOGIN_USER = 'users/LOGIN_USER'
const LOGOUT_USER = 'users/LOGOUT_USER'

const logInUser = () =>({
  type: LOGIN_USER
})

const logOutUser = () =>({
  type: LOGOUT_USER
})


const initialState = {
  users,
  isLoggedIn: false
}


export default (state = initialState, action = {}) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true
      }
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}

export { logOutUser, logInUser }