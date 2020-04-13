import gql from 'graphql-tag'

export const apartmentTypeDefs = `
  type Apartment {
    _id: String
    number: String
    block: String
    residents: [Resident]
  }

  type CreateApartmentPayload {
    apartment: Apartment
  }

  input CreateApartmentInput {
    number: String!
    block: String!
    residents: [ResidentInput]!
  }
`
