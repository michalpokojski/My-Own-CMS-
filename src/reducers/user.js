const LOGIN_USER = 'users/LOGIN_USER'

export const logInUser = () =>({
  type: LOGIN_USER
})


const initialState = {
  users: [1,2,3,4],
  isLoggedIn: false
}


export default (state = initialState, action = {}) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true
      }
    default:
      return state
  }
}