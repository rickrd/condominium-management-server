const getApartments = (req, res) => {
  console.log(req.query)

  const {
    query: { id },
  } = req

  if (!id) {
    return res.status(200).send({ apartments })
  }

  const parsedId = parseInt(id)

  const apartment = apartments.find((apartment) => apartment.id === parsedId)

  return res.status(200).send({ apartment })
}

export { getApartments }
