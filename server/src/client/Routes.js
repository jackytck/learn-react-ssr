import Home from './components/Home'
import React from 'react'
import { Route } from 'react-router-dom'

export default () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
    </div>
  )
}
