const { StatusCodes } = require('http-status-codes')

const { AirplaneService } = require('../services')
const { response } = require('express')

async function createAirplane(req, res) {
  try {
    console.log('inside controller')
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    })
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'successfully created a airplne',
      data: airplane,
      error: {},
    })
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'something went wrong while creating a airplne',
      data: {},
      error: error,
    })
  }
}

module.exports = { createAirplane }
