import Apartment from '../models/apartment.model'

const getAllApartments = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        number: 202
      },
    ]),
  }
}

// const createApartment = async (req, res) => {
//   const {
//     body: {number},
//   }= req

//   if (!number) {
//     return res.status(400).send({apartment, message: "The number is invalid."})
//   }

//   const apartment = await Apartment.create({number})

//   return res.status(200).send({apartment, message: "Successfully created!"})
// }

export { getAllApartments }
