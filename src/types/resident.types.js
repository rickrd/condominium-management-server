export const residentTypeDefs = `
  type Resident {
    _id: String
    name: String!
    birthdate: String
    phone: String
    email: String
  }

  input ResidentInput {
    name: String!
    birthdate: String
    phone: String
    email: String
  }
`
