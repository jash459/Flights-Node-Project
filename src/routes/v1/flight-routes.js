const express = require('express')

const { FlightController } = require('../../controllers')
const { FlightMiddlewares } = require('../../middlewares')

const router = express.Router()
// console.log('inside flight routes')
// api/v1/Flights -->POST request
router.post(
  '/',
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight,
)

// api/v1/Flights?trips=MUM-DEL -->GET request
router.get(
    '/',
    FlightController.getAllFlights,
  )
  

module.exports = router
