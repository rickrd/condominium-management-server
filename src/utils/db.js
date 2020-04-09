import { Mongoose } from "mongoose"
// What’s important to understand is that the connection will be established once.
// All subsequent requests will use the existing database connection. 

const mongoose = new Mongoose()

// Adding the native promise library to be used by Mongoose
mongoose.Promise = global.Promise

let databaseConnection

export const getDatabaseConnection = async () => {
  if (databaseConnection) {
    console.log("=> using existing database connection")
    return databaseConnection
  }

  const {
    env: { DATABASE_ENDPOINT },
  } = process

  if (!DATABASE_ENDPOINT) {
    console.error("No database endpoint was found")
    return Promise.reject()
  }

  console.log("=> using new database connection")

  const database = await mongoose.connect(DATABASE_ENDPOINT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  databaseConnection = database

  return databaseConnection
}