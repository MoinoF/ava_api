
class id_validate {

  execute = ( id ) => {
    if ( isNaN( id ) || id === undefined || id === null ) return false
    else return true
  }

}

module.exports = new id_validate()