const app = require('express')()
const bodyParser = require('body-parser')
const consign =  require('consign')


consign()
    .include('/src/routes')
    .then('/src/controller')
    .into(app)

    module.exports = app


