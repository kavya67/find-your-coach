const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const path = 'mongodb://localhost:27017/find-your-coach-app'

mongoose.connect(path,{useNewUrlParser: true})
    .then(()=>{
        console.log('connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })

module.exports = mongoose