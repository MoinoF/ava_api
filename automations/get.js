
class get {

  /**
   * GET ALL
   */
  execute = async ( res, model ) => {
    
    const query_result = await model

    if ( query_result.length > 0 ) {
      res.status( 200 ).json( query_result )
      return
    } 
    
    if ( query_result.length === 0 ) {
      res.status( 200 ).json({
        status: true,
        msg: "No data found!"
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

module.exports = new get()