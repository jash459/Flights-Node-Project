const express = require('express')

const { CityController } = require('../../controllers')

const router = express.Router()
// console.log('inside airplane routes')
// api/v1/cities -->POST request
router.post(
  '/',
  CityController.createCity,
)


module.exports = router
