import { connect } from 'react-redux'
import Users from '../components/Users'
import { submit } from 'redux-form'
import { saveEditing } from '../reducers/usersOperations'

export default connect(
  state => ({
    removedUsers: state.filters.filterOut,
    editedUsers: state.userOperations.editedUsers,
    submitStatusNewUser: state.form.newUser || false,
    submitStatusEditUser: state.form.editUser || false,
    newUsers: state.userOperations.newUsers,
    userBeingEdited: state.userOperations.userBeingEdited,
    openUserEdit: state.userOperations.openUserEdit
  }),
  dispatch => ({
    handleSubmitNewUser: () => dispatch(submit('newUser')),
    handleSubmitEditUser: () => dispatch(submit('editUser')),
    saveEditing: submitStatus => dispatch(saveEditing(submitStatus))
  })
)(Users)