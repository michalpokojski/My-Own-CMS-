const ADD_USER = 'addNewUser/ADD_USER'

const addNewUser = userData => ({
  type: ADD_USER,
  userData
})

const initialState = {
  newUsers: []
}



export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        newUsers: state.newUsers.filter(user => user.email !== action.userData.email).concat(action.userData)
      }
    default:
      return state
  }
}

export { addNewUser }