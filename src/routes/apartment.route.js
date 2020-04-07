import express, { Router } from 'express'

import {getApartments} from '../controllers/apartment.controller'

const router = Router()

router.post('/', (req, res) => {
  const {
    body: {number},
  } = req
    console.log(number)

    res.status(200).send({ message: "success!"})
})

router.get('/', getApartments)

export default router