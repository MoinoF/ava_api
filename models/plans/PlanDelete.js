const knex = require("../../database/connection")

class PlanDelete {

  /**
   * GET BY ID
   */
  delete = async ( id ) => {

    try {

      const query_result = await knex.delete()
        .table("plans")
        .where({ id: id })
      return query_result
      
    } catch (error) {
      console.log( error )
      return undefined
    }

  }

}

module.exports = new PlanDelete()