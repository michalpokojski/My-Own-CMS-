import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui/styles'
import Router from './router'
import LogIn from './containers/LogIn'
import AuthRoute from './AuthRoute'
import AppView from "./containers/AppView"
import SecuredRoute from './SecuredRoute'

const App = (props) => {
    injectTapEventPlugin()
    const { store } = props
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


export default App