import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logInUser } from '../reducers/user'
import { Redirect } from 'react-router'

class LogIn extends Component {

  render() {
    return (
      <div>
        {this.props.isLoggedIn
          ?
          <Redirect from='' to='/dashboard' /> :
          <button onClick={this.props.logInUser}>Log In</button>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn
  }),
  dispatch => ({
    logInUser: () => dispatch(logInUser())
  })
)(LogIn)

