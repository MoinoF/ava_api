const knex = require("../../database/connection")


class PlansGet {

  /**
   * GET ALL
   */
  get_all = async () => {

    try {

      const query_result = await knex.select()
        .table("plans")
      return query_result
      
    } catch (error) {
      console.log( error )
      return undefined
    }

  }


  /**
   * GET ACTIVE
   */
  get_active = async () => {

    try {

      const query_result = await knex.select()
        .table("plans")
        .where({ active: 1 })
      return query_result
      
    } catch (error) {
      console.log( error )
      return undefined
    }

  }


  /**
   * GET BY ID
   */
  get_by_id = async ( id ) => {

    try {

      const query_result = await knex.select()
        .table("plans")
        .where({ id: id })
      return query_result
      
    } catch (error) {
      console.log( error )
      return undefined
    }

  }

}

module.exports = new PlansGet()