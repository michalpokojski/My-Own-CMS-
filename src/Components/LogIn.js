import React, { Component } from 'react'
import AppView from "./AppView"
import { connect } from 'react-redux'
import { logInUser } from '../reducers/user'
import { Route } from 'react-router'


class LogIn extends Component {

  render() {
    console.log('isLoggedIn', this.props.isLoggedIn)
    return (
      <div>
        {this.props.isLoggedIn
          ?
          <Route path='/' component={AppView}/> :
          <button onClick={ this.props.logInUser }>Log In</button>
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