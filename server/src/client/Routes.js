import AdminsListPage from './pages/AdminsListPage'
import App from './App'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
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
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
