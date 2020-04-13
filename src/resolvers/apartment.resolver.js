import { useApartments } from '../hooks/apartment.hook'

export const resolvers = {
  Query: {
    async apartments() {
      const { getAllApartments } = await useApartments()

      const apartments = await getAllApartments()

      return apartments
    },

    async apartment(parent, {input}) {
      const {getApartmentById} = await useApartments()

      const apartments = await getApartmentById(input)

      return apartments
    }
  },

  Mutation: {
    async createApartment(parent, { input }) {
      const { createApartment } = await useApartments()

      const apartment = await createApartment(input)

      return { apartment }
    },

    async updateApartment(parent, { input }) {
      const { updateApartment } = await useApartments()

      const apartment = await updateApartment(input)

      return { apartment }
    },

    async deleteApartment(parent, { input }) {
      const { deleteApartment } = await useApartments()

      const apartment = await deleteApartment(input)

      return { apartment }
    },
  },
}
