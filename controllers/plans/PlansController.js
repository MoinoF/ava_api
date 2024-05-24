const PlanCreateC = require("./PlanCreateC")
const PlanDeleteC = require("./PlanDeleteC")
const PlanUpdateC = require("./PlanUpdateC")
const PlansGetC = require("./PlansGetC")

class PlansController {

  /**
   * CREATE NEW
   */
  create = async ( req, res ) => {
    PlanCreateC.post( req, res )
  }


  /**
   * GET ALL
   */
  get_all = async ( req, res ) => {
    PlansGetC.get_all( req, res )
  }


  /**
   * GET ACTIVE
   */
  get_active = async ( req, res ) => {
    PlansGetC.get_active( req, res )
  }


  /**
   * GET BY ID
   */
  get_by_id = async ( req, res ) => {
    PlansGetC.get_by_id( req, res )
  }


  /**
   * DELETE
   */
  delete = async ( req, res ) => {
    PlanDeleteC.delete_by_id( req, res )
  }


  /**
   * UPDATE
   */
  update = async ( req, res ) => {
    PlanUpdateC.execute( req, res ) 
  }

}

module.exports = new PlansController()