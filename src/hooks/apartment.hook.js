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

  return { apartmentModel, getAllApartments }
}
