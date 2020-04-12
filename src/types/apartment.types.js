import gql from 'graphql-tag'

export const apartmentTypeDefs = `
  type Apartment {
    _id: String
    number: Int
    block: String
    residents: [Resident]
  }

  type CreateApartmentPayload {
    apartment: Apartment
  }

  input CreateApartmentInput {
    number: Int!
    block: String!
    residents: [ResidentInput]
  }
`
