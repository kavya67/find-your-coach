const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const URI = 'mongodb://localhost:27017/find-your-coach-app'

mongoose.set("useCreateIndex", true)
mongoose.set("useFindAndModify", false)
mongoose.connect(URI, {useNewUrlParser: true})
    .then(()=>{
        console.log('connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })

module.exports = mongoose