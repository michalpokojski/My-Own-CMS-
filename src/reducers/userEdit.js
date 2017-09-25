const EDIT_USER = 'userEdit/EDIT_USER'
const SAVE_AND_CLOSE_EDIT = 'userEdit/SAVE_AND_CLOSE_EDIT'

const currentlyBeingEdited = userData => ({
  type: EDIT_USER,
  userData
})

const saveEditing = () => ({
  type: SAVE_AND_CLOSE_EDIT,
})

const initialState = {
  userBeingEdited: null,
  openUserEdit: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        userBeingEdited: action.userData,
        openUserEdit: true
      }
    case SAVE_AND_CLOSE_EDIT:
      return {
        ...state,
        userBeingEdited: null,
        openUserEdit: false
      }
    default:
      return state
  }
}

export { currentlyBeingEdited, saveEditing }