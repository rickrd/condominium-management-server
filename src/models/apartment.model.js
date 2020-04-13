import { Schema, model } from 'mongoose'

const Resident = new Schema({
  name: String,
  birthdate: String,
  phone: String,
  email: String
})

const ApartmentSchema = new Schema({
  number: Number,
  block: String,
  residents: [Resident]
})

const Apartment = (databaseConnection) => {
  return databaseConnection.model('Apartment', ApartmentSchema)
}

export default Apartment
