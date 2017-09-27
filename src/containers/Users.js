import { connect } from 'react-redux'
import Users from '../components/Users'
import { submit } from 'redux-form'
import { saveEditing } from '../reducers/usersOperations'
import { removeUser, closeConfirm } from '../reducers/userRemove'

export default connect(
  state => ({
    removedUsers: state.userRemove.filterOut,
    editedUsers: state.userOperations.editedUsers,
    submitStatusNewUser: state.form.newUser || false,
    submitStatusEditUser: state.form.editUser || false,
    newUsers: state.userOperations.newUsers,
    userBeingEdited: state.userOperations.userBeingEdited,
    openUserEdit: state.userOperations.openUserEdit,
    confirmModalOpenStatus: state.userRemove.confirmModalOpenStatus,
    userToDelete: state.userRemove.userToDelete

  }),
  dispatch => ({
    handleSubmitNewUser: () => dispatch(submit('newUser')),
    handleSubmitEditUser: () => dispatch(submit('editUser')),
    saveEditing: submitStatus => dispatch(saveEditing(submitStatus)),
    removeUser: userEmail => dispatch(removeUser(userEmail)),
    closeConfirm: () => dispatch(closeConfirm())
  })
)(Users)