import { useApartments } from '../hooks/apartment.hook'

export const resolvers = {
  Query: {
    async apartments() {
      const {getAllApartments} = await useApartments()

      const apartments = getAllApartments()

      return apartments
    },
  },
}
