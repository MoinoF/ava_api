const knex = require('../../database/connection')

class PlanCreate {
  /**
   * Create
   */
  create = async ( data = {} ) => {
    try {

      const query_result = await knex.insert( data ).table("plans")

      if ( query_result !== undefined ) return true
      else return false

    } catch (error) {
      console.log(error)
      return undefined
    }
  }
}

module.exports = new PlanCreate()
