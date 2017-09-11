import React, {Component} from 'react'

class AppView extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.logOutUser}>Log Out</button>
        App View
      </div>
    )
  }
}

export default AppView