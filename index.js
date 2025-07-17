const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Discord-RPC is alive!')
})

app.listen(3000, () => {
  console.log('App is running on port 3000')
})
