const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/cruddb'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', function () {
    console.log('-------||||-------')
})
app.use(express.json())


const Router = require('./routes/route')
app.use('/alien', Router)


app.listen(9000, () => {
    console.log('server started')
})