import UsersList, { loadData } from './components/UsersList'

import Home from './components/Home'
import React from 'react'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList
  }
]
