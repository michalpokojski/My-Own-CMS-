import { connect } from 'react-redux'
import { logOutUser } from '../reducers/user'
import AppView from '../components/AppView'

export default connect(
  null,
  dispatch => ({
    logOutUser: () => dispatch(logOutUser())
  })
)(AppView)