const { StatusCodes } = require('http-status-codes')

const { AirplaneService } = require('../services')
const { response } = require('express')

const { SuccessResponse, ErrorResponse } = require('../utils/common')

async function createAirplane(req, res) {
  try {
    console.log('inside controller')
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    })
    SuccessResponse.data = airplane
    return res.status(StatusCodes.CREATED).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}

/**
 * POST : /airplanes
 * req-body {}
 */

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes()
    SuccessResponse.data = airplanes
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}

/**
 * POST : /airplanes/:id
 * req-body {}
 */

async function getAirplane(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplane(req.params.id)
    SuccessResponse.data = airplanes
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}

module.exports = { createAirplane, getAirplanes, getAirplane }
