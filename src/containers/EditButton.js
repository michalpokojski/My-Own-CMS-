import { connect } from 'react-redux'
import EditButton from "../components/EditButton";
import { currentlyBeingEdited } from '../reducers/usersOperations'


export default connect(
  null,
  dispatch => ({
    currentlyBeingEdited: user => dispatch(currentlyBeingEdited(user))
  })
)(EditButton)