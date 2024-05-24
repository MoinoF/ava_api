const data_validate = require("../../automations/data_validate")


class PlanUpdateC {

  execute = async ( req, res ) => {

    try {

      const { name, description, price, validity } = req.body

      const validate = data_validate.all([ name, description, price, validity ])

      
      
    } catch ( error ) {
      console.log( error )
      res.status( 400 ).json({
        status: false,
        msg: "Error!"
      })
      return
    }

  }

}

module.exports = new PlanUpdateC()