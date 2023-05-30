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
  
// api/v1/Flights/:id -->GET request
router.get(
  '/:id',
  FlightController.getFlight,
)

// api/v1/Flights/:id/seats -->PATCH request
router.patch(
  '/:id/seats', 
  FlightMiddlewares.validateUpdateSeatsRequest,
  FlightController.updateSeats
);

module.exports = router
