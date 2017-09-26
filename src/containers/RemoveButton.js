import { connect } from 'react-redux'
import RemoveButton from "../components/RemoveButton";
import { removeUser } from '../reducers/filters'


export default connect(
  null,
  dispatch => ({
    removeUser: userEmail => dispatch(removeUser(userEmail))
  })
)(RemoveButton)