import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Phenom Llane - A WoW Guild</title>
  </head>

  <body>
    <div id="root">
      ${renderToString(
        <div>Hi There</div>
      )}
    </div>
  </body>
</html>
`

app.get('/', (req, res) => {
  res.send(html)
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000')
})
