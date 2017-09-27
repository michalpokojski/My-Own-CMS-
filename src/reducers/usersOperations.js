const ADD_USER = 'addNewUser/ADD_USER'
const EDIT_USER = 'addNewUser/EDIT_USER'
const CURRENTLY_EDIT_USER = 'userEdit/CURRENTLY_EDIT_USER'
const SAVE_AND_CLOSE_EDIT = 'userEdit/SAVE_AND_CLOSE_EDIT'
const CLOSE_EDIT = 'userEdit/CLOSE_EDIT'

const addNewUser = userData => ({
  type: ADD_USER,
  userData
})

const submitEditedUser = newUserData => ({
  type: EDIT_USER,
  newUserData
})

const currentlyBeingEdited = userData => ({
  type: CURRENTLY_EDIT_USER,
  userData
})

const saveEditing = submitStatus => ({
  type: SAVE_AND_CLOSE_EDIT,
  submitStatus
})

const discardEdditing = () => ({
  type: CLOSE_EDIT
})

const initialState = {
  newUsers: [],
  editedUsers: [],
  userBeingEdited: null,
  openUserEdit: false
}



export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        newUsers: state.newUsers.filter(user => user.email !== action.userData.email).concat(action.userData)
      }
    case EDIT_USER:
      return {
        ...state,
        editedUsers: state.editedUsers.filter(user => user.email !== action.newUserData.email).concat(action.newUserData)
      }
    case CURRENTLY_EDIT_USER:
      return {
        ...state,
        userBeingEdited: action.userData,
        openUserEdit: true
      }
    case SAVE_AND_CLOSE_EDIT:
      return action.submitStatus ? {
        ...state,
        userBeingEdited: null,
        openUserEdit: false
      } : state
    case CLOSE_EDIT:
      return {
        ...state,
        userBeingEdited: null,
        openUserEdit: false
      }
    default:
      return state
  }
}

export { addNewUser, submitEditedUser, currentlyBeingEdited, saveEditing, discardEdditing }