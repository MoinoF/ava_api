const del = require("../../automations/delete")
const PlanDelete = require("../../models/plans/PlanDelete")
const id_validate = require("../../automations/id_validate")

class PlanDeleteC {

  /**
   * DELETE BY ID
   */
  delete_by_id = async ( req, res ) => {

    try {

      const { id } = req.params

      const validate = id_validate.execute( id )

      if ( validate === true ) {

        await del.execute( res, PlanDelete.delete( id ) )

      } else {
        res.status( 400 ).json({
          status: false,
          msg: `ID ${ id } Inválid!`
        })
        return
      }
      
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: false,
        msg: "Error!",
      })
      return
    }

  }

}

module.exports = new PlanDeleteC()