const {StatusCodes}= require('http-status-codes')
const {Op}= require('sequelize')
const { FlightRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')
const { param } = require('../routes/v1')

const flightRepository = new FlightRepository()

async function createFlight(data) {
  try {
    // console.log('inside service')
    const flight = await flightRepository.create(data)
    return flight
  } catch (error) {
    // console.log('git error',error.name)
    if(error.name == 'SequelizeValidationError'){
        let explanation=[]

        error.errors.forEach((err)=>{
            explanation.push(err.message)
        })
        throw new AppError(explanation,StatusCodes.BAD_REQUEST)
    }
    throw new AppError('Cannot create a new flight object',StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAllFlights(query){
  let customFilter = {};
  let sortFilter = [];
  const endingTripTime=' 23:59:00';
  // trips =MUM-DEL
  if(query.trips){
    [departureAirportId, arrivalAirportId]= query.trips.split('-');
    customFilter.departureAirportId= departureAirportId;
    customFilter.arrivalAirportId=arrivalAirportId;
    // TODO : add a check that they are not same
  }
  if(query.price){
    [minPrice, maxPrice]= query.price.split('-');
    console.log(minPrice, maxPrice)
    customFilter.price={
      [Op.between]:[minPrice,((maxPrice==undefined)?20000 : maxPrice)]
    }
  }
  if(query.travellers){
    customFilter.totalSeats={
      [Op.gte]:query.travellers
    }
  }
  if(query.tripDate){
    customFilter.departureTime={
      // [Op.gte]:query.tripDate
      [Op.between]:[query.tripDate, query.tripDate + endingTripTime]
    }
  }
  if(query.sort){
    const params=query.sort.split(',');
    const sortFilters=params.map((param) => param.split('_'))
    sortFilter=sortFilters
  }
  console.log(customFilter, sortFilter)
  try {
    const flights= await flightRepository.getAllFlights(customFilter, sortFilter)
    return flights
  } catch (error) {
    console.log(error)
    throw new AppError('Cannot fetch data of all flights',StatusCodes.INTERNAL_SERVER_ERROR)
  }
}


module.exports = {
  createFlight,
  getAllFlights
}

