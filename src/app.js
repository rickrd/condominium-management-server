import express from 'express'

import apartmentRouter from './routes/apartment'

const app = express()

// server.use

const listener = app.listen(8000, function() {
  console.log('Listening on port ' + listener.address().port)
})

