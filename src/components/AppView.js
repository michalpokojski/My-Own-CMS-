import React, { Component } from 'react'
import MainMenu from './MainMenu'
import Posts from './Posts'
import Users from './Users'
import Dashboard from './Dashboard'
import { Route } from 'react-router-dom'

class AppView extends Component {
  render() {
    return (
      <div>
        <MainMenu logOutUser={this.props.logOutUser}/>
        <Route path='/dashboard/posts' component={Posts}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route path='/dashboard/users' component={Users}/>
      </div>
    )
  }
}

export default AppView