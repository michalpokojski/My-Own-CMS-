import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import Router from './router'
import LogIn from './containers/LogIn'
import AuthRoute from './AuthRoute'
import AppView from "./containers/AppView"
import { MuiThemeProvider } from 'material-ui/styles'
import SecuredRoute from './SecuredRoute'

class App extends Component {
  render() {
    const {store} = this.props
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <div>
                <AuthRoute path='/'/>
                <Route path='/login' component={LogIn}/>
                <Route path='/cms' component={SecuredRoute(AppView)}/>
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    )
  }
}

export default App