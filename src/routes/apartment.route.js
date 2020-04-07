import { Router } from 'express'

import {getApartments, createApartment} from '../controllers/apartment.controller'

const router = Router()

router.post('/', createApartment)

router.get('/', getApartments)

export default router