import gql from 'graphql-tag'
import { makeExecutableSchema } from 'apollo-server'

import { apartmentTypeDefs } from '../types/apartment.types'
import { residentTypeDefs } from '../types/resident.types'
import {resolvers as apartmentResolvers} from '../resolvers/apartment.resolver'

const queries = `
  type Query {
    residents: [Resident]
    apartments: [Apartment]
  }
`

const mutations = `
  type Mutation {
    createApartment(input: CreateApartmentInput!): CreateApartmentPayload
  }
`

export const schema = makeExecutableSchema({
  typeDefs: [queries, mutations, apartmentTypeDefs, residentTypeDefs],
  resolvers: apartmentResolvers
})
