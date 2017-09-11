import { connect } from 'react-redux'
import { logInUser } from '../reducers/user'
import LogIn from '../Components/LogIn'

export default connect(
  null,
  dispatch => ({
    logInUser: () => dispatch(logInUser())
  })
)(LogIn)