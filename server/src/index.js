import Home from './client/components/Home'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', (req, res) => {
  const content = renderToString(<Home />)

  res.send(content)
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
