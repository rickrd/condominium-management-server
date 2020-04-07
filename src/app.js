import express from 'express'
import mongoose from 'mongoose'

import apartmentRouter from './routes/apartment.route'

const {
  env: { MONGODB_PASSWORD },
} = process

mongoose.connect(`mongodb+srv://admin:${MONGODB_PASSWORD}@condominium-management-heifk.gcp.mongodb.net/condominium-management?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function() {
  // we're connected!
  console.log('success')
});

const server = express()

server.use(express.json())

server.use('/apartments', apartmentRouter)

const listener = server.listen(8000, function () {
  console.log('Listening on port ' + listener.address().port)
})
