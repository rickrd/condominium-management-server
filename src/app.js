import express from 'express'

import apartmentRouter from './routes/apartment'

const server = express()

server.use(express.json())

server.use('/apartments', apartmentRouter)

const listener = server.listen(8000, function() {
  console.log('Listening on port ' + listener.address().port)
})

