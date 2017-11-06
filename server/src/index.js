import Home from './client/components/Home'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(<Home />)

  const html = `
    <html>
      <head></head>
      <body>
        <div id='root'>${content}</div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `

  res.send(html)
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
