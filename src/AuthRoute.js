import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logInUser } from './reducers/user'
import { Redirect } from 'react-router'

class AuthRoute extends Component {

  render() {
    return (
      <div>
        {this.props.isLoggedIn
          ?
          <Redirect from='' to='/dashboard' /> :
          <Redirect to='/login' />
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn
  })
)(AuthRoute)
