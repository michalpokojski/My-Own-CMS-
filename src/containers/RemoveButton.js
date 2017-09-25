import { connect } from 'react-redux'
import RemoveButton from "../components/RemoveButton";
import { removeUser } from '../reducers/filters'


export default connect(
  null,
  dispatch => ({
    remover: userEmail => dispatch(removeUser(userEmail))
  })
)(RemoveButton)