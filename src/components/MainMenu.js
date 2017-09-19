import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom'

class MainMenu extends Component {

  redirect = path => () => this.props.history.push(path)

  render() {
    return (
      <Tabs>
        <Tab onActive={this.redirect('/dashboard')} label="Dashboard"/>
        <Tab onActive={this.redirect('/dashboard/posts')} label="Posts"/>
        <Tab onActive={this.redirect('/dashboard/users')} label="Users"/>
        <Tab onActive={this.props.logOutUser} label="Logout"/>
      </Tabs>
    )
  }
}

export default withRouter(MainMenu)