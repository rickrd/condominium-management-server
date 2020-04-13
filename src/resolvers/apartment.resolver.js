import { useApartments } from '../hooks/apartment.hook'

export const resolvers = {
  Query: {
    async apartments() {
      const {getAllApartments} = await useApartments()

      const apartments = await getAllApartments()

      return apartments
    },
  },

  Mutation: {
    async createApartment(parent, {input}) {
      const {createApartment} = await useApartments()

      const apartment = await createApartment(input)
      return {apartment}
    }
  }
}
