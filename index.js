const express = require('express')
const mongoose = require('./config/database')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const port = 3004

app.listen(port,()=>{
    console.log('listening to port', port)
})