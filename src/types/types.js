import gql from 'graphql-tag'

import {apartmentTypeDefs} from '../types/apartment.types'
import {residentTypeDefs} from '../types/resident.types'

const Query = gql`
  type Query {
    residents: [Resident]
    apartments: [Apartment]
  }
`

export const types = [Query, apartmentTypeDefs, residentTypeDefs]