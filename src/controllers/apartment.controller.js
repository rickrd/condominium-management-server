import { useApartments } from '../hooks/apartment.hook'

export const getAllApartments = async (event, context) => {
  // You should set this property to false to request AWS Lambda to freeze the process soon after the callback is called, 
  // even if there are events in the NodeJS runtime event loop.
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
