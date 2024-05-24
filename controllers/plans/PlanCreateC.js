const validate_data = require("../../automations/data_validate")
const PlanCreate = require("../../models/plans/PlanCreate")
const create = require("../../automations/create")

class PlanCreateC {
  post = async (req, res) => {
    try {

      const { name, description, price, validity } = req.body
      
      const validate = validate_data.all([ name, description, price, validity ])
      
      if ( validate ) {

        const created_at = new Date()

        const data = {
          name: name,
          description: description,
          price: price,
          validity: validate,
          created_at: created_at,
          active: 1,
        }

        await create.execute( res, PlanCreate.create( data ) )

      } else {
        res.status( 400 ).json({
          status: false,
          msg: "Error! All data required."
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

module.exports = new PlanCreateC()
