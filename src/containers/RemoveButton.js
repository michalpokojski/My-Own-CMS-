import { connect } from 'react-redux'
import RemoveButton from "../components/RemoveButton";
import { openConfirm } from '../reducers/userRemove'


export default connect(
  null,
  dispatch => ({
    openConfirm: (user) => dispatch(openConfirm(user)),
  })
)(RemoveButton)