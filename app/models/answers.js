const mongoose = require("mongoose")
const Schema = mongoose.Schema

const answerSchema = new Schema({
    selectedAnswer:{
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }

})

const Answer = mongoose.model('Answer', answerSchema)
module.exports = Answer