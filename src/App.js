import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import Router from './router'
import LogIn from './Components/LogIn'

class App extends Component {
  render() {
    const {store} = this.props
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' component={LogIn}/>
        </Router>
      </Provider>
    )
  }
}

export default App
