const express = require('express')

const { ServerConfig, Logger } = require('./config')
const apiRoutes = require('./routes')
const logger = require('./config/logger-config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes)

app.listen(ServerConfig.PORT, async() => {
  console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`)
  // bad code alert
  const {City, Airport}= require('./models')
  // const bengaluru = await City.findByPk(1, {include:{model:Airport}})
  // console.log(bengaluru)
  // const airport = await Airport.create({name : 'Kempegowda Airport', code:'BLR', cityId:1})
  // const dbairport= await bengaluru.createAirport({name : 'Huballi Airport', code:'BL'})
  // console.log(dbairport)
  // const airportsInUdp=await bengaluru.getAirports()
  // console.log(airportsInUdp)
  // const hbairport = await Airport.findByPk(3)
  // console.log(hbairport)
  // await bengaluru.removeAirport(hbairport)
  // await City.destroy({
  //   where:{
  //     id:1
  //   }
  // })

  // const city = await City.findByPk(1)
  // await city.createAirport({name: 'Indira Gandhi Airport', code:'IN'})

  await City.destroy({
      where:{
        id:1
      }
    })


})
