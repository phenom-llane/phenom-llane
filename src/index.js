import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import App from './client/App'

const app = express()

const html =
`<!DOCTYPE html>
<html>
  <head>
    <link rel="icon" type="image/png" href="/images/phenom-logo.png">
    <title>Phenom Llane - A WoW Guild</title>
  </head>

  <body>
    <div id="root">${renderToString(<App />)}</div>

    <script src="js/main.js"></script>
  </body>
</html>
`

app.use('/images', express.static('assets/images'))

app.use('/js', express.static('client'))

app.get('/', (req, res) => {
  res.send(html)
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000')
})
