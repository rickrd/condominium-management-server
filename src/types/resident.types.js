import gql from 'graphql-tag'

export const residentTypeDefs = gql`
  type Resident {
    _id: String
    name: String
  }
`
