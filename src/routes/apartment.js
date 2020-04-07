import express, { Router } from 'express'

const router = Router()

const apartments = [
  {
    id: 0,
    number: 500,
  },
  {
    id: 1,
    number: 303
  }
]

router.post('/', (req, res) => {
  const {
    body: {number},
  } = req
    console.log(number)

    res.status(200).send({ message: "success!"})
})

router.get('/', (req, res) => {
  console.log(req.query)

  const {
    query: {id}
  } = req

  if (!id) {
    return res.status(200).send({apartments})
  }

  const parsedId = parseInt(id)

  const apartment = apartments.find(apartment => apartment.id === parsedId)
  return res.status(200).send({ apartment })
})

export default router