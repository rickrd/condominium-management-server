import gql from 'graphql-tag'

export const apartmentTypeDefs = gql`
  type Apartment {
    _id: String
    number: Int
  }
`
