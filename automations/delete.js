

class del {

  execute = async ( res, model ) => {


    const query_result = await model

    if ( query_result ) {
      res.status( 200 ).json({
        status: true,
        msg: "Deleted!"
      })
      return
    } 

    if ( query_result === undefined ) {
      res.status( 500 ).json({
        status: undefined,
        msg: "Internal server error!"
      })
      return
    } else {
      res.status( 400 ).json({
        status: false,
        msg: "Error! No data found to delete."
      })
      return
    }

  }

}

module.exports = new del()