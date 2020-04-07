import { Schema, model } from 'mongoose'

 const apartmentSchema = new Schema({
  number: String,
})

const Apartment = model('apartments', apartmentSchema)

export default Apartment