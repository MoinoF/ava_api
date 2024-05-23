

class HomeController {

  execute = async ( req, res ) => {

    try {

      res.status( 200 ).json({
        site_name: 'AVA'
      })
      return
      
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

module.exports = new HomeController()