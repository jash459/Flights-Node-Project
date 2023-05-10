const express = require('express')

const { CityController } = require('../../controllers')
const { CityMiddlewares } = require('../../middlewares')

const router = express.Router()
// console.log('inside airplane routes')
// api/v1/cities -->POST request
router.post(
  '/',
  CityMiddlewares.validateCreateRequest,
  CityController.createCity,
)


module.exports = router
