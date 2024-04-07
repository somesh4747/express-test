const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hey somesh your test express app is running on AWS EC2 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})