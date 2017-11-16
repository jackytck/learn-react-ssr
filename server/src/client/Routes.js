import HomePage from './pages/HomePage'
import React from 'react'
import UsersListPage from './pages/UsersListPage'

export default [
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
