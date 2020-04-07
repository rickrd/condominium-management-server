const express = require('express')

const app = express()

const listener = app.listen(8000, function() {
  console.log('Listening on port ' + listener.address().port)
})

