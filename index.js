const express = require('express')
const app = express()
const router = require('./routes/routes')

const port = 1000

app.use( '/', router )

app.listen( port, ( req, res ) => {
  console.log(` Server started on port http://localhost:${ port }`);
})