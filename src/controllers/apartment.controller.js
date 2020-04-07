import Apartment from '../models/apartment.model'

const getApartments = async (req, res) => {
  console.log(req.query)

  const {
    query: { _id },
  } = req

  if (!_id) {
    const apartments = await Apartment.find()

    return res.status(200).send({ apartments })
  }

  const apartments = await Apartment.find({_id})

  return res.status(200).send({ apartments })
}

const createApartment = async (req, res) => {
  const {
    body: {number},
  }= req

  if (!number) {
    return res.status(400).send({apartment, message: "The number is invalid."})
  }

  const apartment = await Apartment.create({number})

  return res.status(200).send({apartment, message: "Successfully created!"})
} 


export { createApartment, getApartments }
