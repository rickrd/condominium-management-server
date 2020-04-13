import gql from 'graphql-tag'

export const apartmentTypeDefs = `
  type Apartment {
    _id: String!
    number: String
    block: String
    residents: [Resident]
  }

  type CreateApartmentPayload {
    apartment: Apartment
  }

  type UpdateApartmentPayload {
    apartment: Apartment
  }

  type DeleteApartmentPayload {
    apartment: Apartment
  }

  input CreateApartmentInput {
    number: String!
    block: String!
    residents: [ResidentInput]!
  }

  input UpdateApartmentInput {
    _id: String!
    number: String!
    block: String!
    residents: [ResidentInput]!
  }

  input DeleteApartmentInput {
    _id: String!
  }

  input GetApartmentInput {
    _id: String!
  }
`
