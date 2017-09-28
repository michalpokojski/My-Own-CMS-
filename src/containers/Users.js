import { connect } from 'react-redux'
import Users from '../components/Users'
import { submit } from 'redux-form'
import { saveEditing, discardEdditing } from '../reducers/usersOperations'
import { removeUser, closeConfirm } from '../reducers/userRemove'


const mapStateToProps = (state, ownProps) => {

  return ({
    removedUsers: state.userRemove.filterOut,
    editedUsers: state.userOperations.editedUsers,
    submitStatusNewUser: state.form.newUser || false,
    submitStatusEditUser: state.form.editUser || false,
    newUsers: state.userOperations.newUsers,
    userBeingEdited: state.userOperations.userBeingEdited,
    openUserEdit: state.userOperations.openUserEdit,
    confirmModalOpenStatus: state.userRemove.confirmModalOpenStatus,
    userToDelete: state.userRemove.userToDelete

  })
}

const mapDispatchToProps = dispatch => ({
  handleSubmitNewUser: () => dispatch(submit('newUser')),
  handleSubmitEditUser: () => dispatch(submit('editUser')),
  saveEditing: submitStatus => dispatch(saveEditing(submitStatus)),
  removeUser: userEmail => dispatch(removeUser(userEmail)),
  closeConfirm: () => dispatch(closeConfirm()),
  discardEdditing: () => dispatch(discardEdditing())
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)