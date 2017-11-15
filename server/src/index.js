import 'babel-polyfill'

import Routes from './client/Routes'
import createStore from './helpers/createStore'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import renderer from './helpers/renderer'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  const routes = matchRoutes(Routes, req.path)
  console.log(routes)

  res.send(renderer(req, store))
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
