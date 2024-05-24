const get = require("../../automations/get")
const PlansGet = require("../../models/plans/PlansGet")
const id_validate = require("../../automations/id_validate")


class PlansGetC {

  /**
   * GET ALL
   */
  get_all = async ( req, res ) => {

    try {

      await get.execute( res, PlansGet.get_all() )
      
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: false,
        msg: "Error!",
      })
      return
    }

  }


  /**
   * GET ACTIVE
   */
  get_active = async ( req, res ) => {

    try {

      await get.execute( res, PlansGet.get_active() )    
      
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: false,
        msg: "Error!",
      })
      return
    }

  }


  /**
   * GET BY ID
   */
  get_by_id = async ( req, res ) => {

    try {

      const { id } = req.params

      const validate = id_validate.execute( id )

      if ( validate === true ) {

        await get.execute( res, PlansGet.get_by_id( id ) )

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

module.exports = new PlansGetC()