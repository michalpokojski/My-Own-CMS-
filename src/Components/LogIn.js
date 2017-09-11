import React, { Component } from 'react'

class LogIn extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.logInUser}>Log In</button>
      </div>
    )
  }
}

export default LogIn