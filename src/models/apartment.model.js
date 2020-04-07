import { Schema, model } from 'mongoose'

 const apartmentSchema = new mongoose.Schema({
  number: String,
})

export const Apartment = model('Apartment', apartmentSchema)