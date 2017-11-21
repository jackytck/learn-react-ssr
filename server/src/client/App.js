import Header from './components/Header'
import React from 'react'
import { fetchCurrentUser } from './actions'
import { renderRoutes } from 'react-router-config'

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  )
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}
