import { Schema, model } from 'mongoose'

const ApartmentSchema = new Schema({
  number: String,
})

const Apartment = (databaseConnection) => {
  return databaseConnection.model('Apartment', ApartmentSchema)
}

export default Apartment
