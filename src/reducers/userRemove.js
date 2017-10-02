const REMOVE_USER = 'filterName/REMOVE_USER'
const OPEN_CONFIRM_MODAL = 'filterName/OPEN_CONFIRM_MODAL'
const CLOSE_CONFIRM_MODAL = 'filterName/CLOSE_CONFIRM_MODAL'

const removeUser = userEmail => ({type: REMOVE_USER, userEmail})

const openConfirm = (user) => ({type: OPEN_CONFIRM_MODAL, user})
const closeConfirm = () => ({type: CLOSE_CONFIRM_MODAL})

const initialState = {
  filterOut: [],
  confirmModalOpenStatus: false,
  userToDelete: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REMOVE_USER:
      return {
        ...state,
        filterOut: [...new Set(state.filterOut.concat(action.userEmail))],
        confirmModalOpenStatus: false,
        userToDelete: null
      }
    case OPEN_CONFIRM_MODAL:
      return {
        ...state,
        confirmModalOpenStatus: true,
        userToDelete: action.user
      }
    case CLOSE_CONFIRM_MODAL:
      return {
        ...state,
        confirmModalOpenStatus: false,
        userToDelete: null
      }
    default:
      return state
  }
}

export { removeUser, openConfirm, closeConfirm }