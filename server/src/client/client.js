import { applyMiddleware, createStore } from 'redux'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// Startup point for the client side application
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import thunk from 'redux-thunk'

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
