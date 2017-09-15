import { connect } from 'react-redux'
import { logOutUser } from '../reducers/auth'
import AppView from '../components/AppView'

export default connect(
  null,
  dispatch => ({
    logOutUser: () => dispatch(logOutUser())
  })
)(AppView)