class data_validate {

  // All data provided
  all = ( data = [] ) => {

    const valid = data.every(( x ) => x !== undefined )

    if ( valid ) return true
    else return false

  }

  // Partial data provided
  partial = ( data = [] ) => {

    const valid = data.every(( x ) => x === undefined )

    if ( !valid ) return true
    else return false

  }

}

module.exports = new data_validate()
