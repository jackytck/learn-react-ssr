import 'babel-polyfill'

import { applyMiddleware, createStore } from 'redux'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// Startup point for the client side application
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import axios from 'axios'
import reducers from './reducers'
import { renderRoutes } from 'react-router-config'
import thunk from 'redux-thunk'

const axiosInstance = axios.create({
  baseURL: '/api'
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
