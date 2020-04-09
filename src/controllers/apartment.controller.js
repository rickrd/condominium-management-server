import {useApartments} from '../hooks/apartment.hook'

export const getAllApartments = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const { apartmentModel } = await useApartments()
    const apartments = await apartmentModel.find()

    return {
      statusCode: 200,
      body: JSON.stringify(apartments),
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not fetch the apartments.',
    }
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

// export { getAllApartments }
