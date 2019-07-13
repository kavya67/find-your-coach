const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    questionType: {
        type: String,
        required: true
    },
    questionTest: {
        type: String,
        required: true,
        unique: true
    },
    options : [
        {
            option: String,
            required: true,
            unique: true
        }
    ]
})

const Question = mongoose.model('Question', questionSchema)
module.exports = Question