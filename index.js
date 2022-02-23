const express = require('express')
const app = express()

const main_route = require('./main_route')

app.use('/', main_route)



app.listen(4444, () => {
  console.log('server has been started')
})