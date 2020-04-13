import { getDatabaseConnection } from '../utils/db'
import Apartment from '../models/apartment.model'

// Linking model to the db instance, otherwise it won't work
export async function useApartments() {
  const databaseConnection = await getDatabaseConnection()
  const apartmentModel = Apartment(databaseConnection)

  async function getAllApartments() {
    const apartments = await apartmentModel.find()

    return apartments
  }

  async function createApartment(apartment) {
    const createdApartment = await apartmentModel.create(apartment)

    return createdApartment
  }

  async function updateApartment(apartment) {
    await apartmentModel.update({ _id: apartment._id }, { $set: apartment })
    
    return apartment
  }

  async function getApartmentById({_id}) {
    const apartments = await apartmentModel.find({ _id})

    return apartments
  }

  async function deleteApartment(apartment) {
    await apartmentModel.remove({ _id: apartment._id })
    
    return apartment
  }

  return { apartmentModel, getAllApartments, createApartment, updateApartment, getApartmentById, deleteApartment }
}
