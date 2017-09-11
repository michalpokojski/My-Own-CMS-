import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Route, Redirect} from 'react-router'
import Router from './router'
import LogIn from './Components/LogIn'
import AppView from "./Components/AppView"


class App extends Component {
  render() {
    const {store} = this.props
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Redirect exact from='/' to='/login'/>
            <Route path='/login' component={LogIn}/>
            <Route path='/dashboard' component={AppView}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
