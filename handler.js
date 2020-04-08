'use strict'

require('@babel/register')

require("dotenv").config({ path: ".env" })

const apartmentController = require("./src/controllers/apartment.controller")

const {getAllApartments} = apartmentController

module.exports = {getAllApartments}
