import React, { Component } from 'react'
import MainMenu from './MainMenu'

class AppView extends Component {
  render() {
    return (
      <div>
        <MainMenu logOutUser={this.props.logOutUser}/>
      </div>
    )
  }
}

export default AppView