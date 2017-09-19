import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


export default function (ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!this.props.user) {
        this.props.history.push("/login")
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.user) {
        this.props.history.push("/login")
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return connect(
    state => ({
      user: state.auth.user
    }))(withRouter(Authentication))
}