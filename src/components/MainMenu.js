import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom'

class MainMenu extends Component {

  render() {
    return (
      <Tabs>
        <Tab onActive={() => this.props.history.push('/dashboard')} label="Dashboard"/>
        <Tab onActive={() => this.props.history.push('/dashboard/posts')} label="Posts"/>
        <Tab onActive={() => this.props.history.push('/dashboard/users')} label="Users"/>
        <Tab onActive={() => this.props.logOutUser()} label="Logout"/>

      </Tabs>
    )
  }
}

export default withRouter(MainMenu)