import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

export default ({children}) => (
  <Router>
    {children}
  </Router>
)
