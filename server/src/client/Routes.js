import App from './App'
import HomePage from './pages/HomePage'
import React from 'react'
import UsersListPage from './pages/UsersListPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      }
    ]
  }
]
