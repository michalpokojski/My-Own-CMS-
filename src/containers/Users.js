import { connect } from 'react-redux'
import Users from '../components/Users'
import { submit } from 'redux-form'
import { saveEditing } from '../reducers/userEdit'

export default connect(
  state => ({
    removedUsers: state.filters.filterOut,
    submitStatus: state.form.newUser || false,
    newUsers: state.addNewUser.newUsers,
    userBeingEdited: state.userEdit.userBeingEdited,
    openUserEdit: state.userEdit.openUserEdit
  }),
  dispatch => ({
    handleSubmit: () => dispatch(submit('newUser')),
    saveEditing: () => dispatch(saveEditing())
  })
)(Users)