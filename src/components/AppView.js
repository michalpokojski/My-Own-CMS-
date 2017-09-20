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
        <Route path='/cms/posts' component={Posts}/>
        <Route exact path='/cms/dashboard' component={Dashboard}/>
        <Route path='/cms/users' component={Users}/>
      </div>
    )
  }
}

export default AppView