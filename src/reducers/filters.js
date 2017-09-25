const REMOVE_USER = 'filterName/REMOVE_USER'

const removeUser = userEmail => ({
  type: REMOVE_USER,
  userEmail
})

const initialState = {
  filterOut: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REMOVE_USER:
      return {
        ...state,
        filterOut: [...new Set(state.filterOut.concat(action.userEmail))],
      }
    default:
      return state
  }
}

export { removeUser }