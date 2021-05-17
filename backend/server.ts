const express = require('express')
const app = express()
const port = 6002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('api/v1/rooms/', (req, res) => {

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('api/v1/analytics', (req, res) => {

  res.send('Hello World')
})
