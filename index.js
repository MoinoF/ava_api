const express = require('express')
const app = express()
const router = require('./routes/routes')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use( cors() )
app.use( bodyParser.json() )
app.use( express.urlencoded({
  extended: true
}))
app.use( '/', router )

const port = 1000

app.listen( port, () => {
  console.log(` Server started on port http://localhost:${ port }`);
})