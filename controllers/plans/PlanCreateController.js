

class PlanCreateController {

  create = async ( req, res ) => {
    
    try {

      const { name, description, price, validity } = req.body
      
    } catch (error) {
      console.log(error)
      res.status( 400 ).json({
        status: false,
        msg: "Error!"
      })
      return
    }

  }

}

module.exports = new PlanCreateController()