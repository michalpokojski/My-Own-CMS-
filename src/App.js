import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { Route } from 'react-router'
import Router from './router'


class App extends Component {
  render() {
    const {store} = this.props
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            Hello World !
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
