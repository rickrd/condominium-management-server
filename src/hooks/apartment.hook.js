import { getDatabaseConnection } from "../utils/db"
import Apartment from "../models/apartment.model"

// linking model to the db instance
export async function useApartments() {
  const databaseConnection = await getDatabaseConnection()
  const apartmentModel = Apartment(databaseConnection)

  return { apartmentModel }
}