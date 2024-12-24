require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("rohitdotcom")
})

app.get('/login', (req, res) => {
    res.send("<h1>please login at chai aur code </h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})