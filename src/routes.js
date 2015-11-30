import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import MainView from './views/MainView'

export default (
  <Route component={App}>
    <Route path="/"  component={MainView} />
  </Route>
)
