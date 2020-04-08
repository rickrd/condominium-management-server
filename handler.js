'use strict'

const getApartments = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        number: 202,
      },
    ]),
  }
}

module.exports = {getApartments}
