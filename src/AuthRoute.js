import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'


class AuthRoute extends Component {

  getDefaultPage = () => this.props.user ? '/dashboard' : '/login'

  render() {
    return (
      <div>
        <Redirect to={this.getDefaultPage()}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.auth.user,
  })
)(AuthRoute)
