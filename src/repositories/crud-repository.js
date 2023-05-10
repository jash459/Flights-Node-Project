const {StatusCodes} = require('http-status-codes')
const { Logger } = require('../config')
const AppError = require('../utils/errors/app-error')

class CrudRepository {
  constructor(model) {
    this.model = model
  }

  async create(data) {
    // console.log('inside repository')

  //   const response = await this.model.create(data)
  //   return response
  // }
  // async destroy(data) {
  //   try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      })
      return response
    // } catch (error) {
    //   Logger.error('Something went wrong in the Crud Repo : destroy')
    //   throw error
    // }
  }

  async get(data) {
    // try {
      const response = await this.model.findByPk(data)
      if(!response){
        throw new AppError('Not able to find the resourse', StatusCodes.NOT_FOUND)
      }
      return response
    // } catch (error) {
    //   Logger.error('Something went wrong in the Crud Repo : get')
    //   throw error
    // }
  }

  async getAll() {
    // try {
      const response = await this.model.findAll()
      return response
    // } catch (error) {
    //   Logger.error('Something went wrong in the Crud Repo : get')
    //   throw error
    // }
  }

  async update(id, data) {
    // data --> object --> { col: value , ....}
    // try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      })
      return response
  //   } catch (error) {
  //     Logger.error('Something went wrong in the Crud Repo : get')
  //     throw error
  //   }
  }
}
module.exports = CrudRepository
