import gql from 'graphql-tag'

export const apartmentTypeDefs = `
  type Apartment {
    _id: String
    number: Int
  }

  type CreateApartmentPayload {
    apartment: Apartment
  }

  input CreateApartmentInput {
    number: Int!
    block: Int!
    residents: [ResidentInput]
  }
`
