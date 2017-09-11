import React, {Component} from 'react'
import {logOutUser} from '../reducers/user'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AppView extends Component {
  render() {
    return (
      <div>
        <Link to='/login'>
          <button onClick={this.props.logOutUser}>Log Out</button>
        </Link>
        App View
      </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    logOutUser: () => dispatch(logOutUser())
  })
)(AppView)