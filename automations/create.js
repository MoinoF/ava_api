
class create {

  execute = async ( res, model ) => {


    const query_result = await model

    if ( query_result === true ) {
      res.status( 201 ).json({
        status: true,
        msg: "Created!"
      })
      return
    }

    if ( query_result === false ) {
      res.status( 400 ).json({
        status: false,
        msg: "Error while creating!"
      })
      return
    }

    if ( query_result === undefined ) {
      res.status( 500 ).json({
        status: undefined,
        msg: "Internal server error!"
      })
      return
    }

  }

}

module.exports = new create()