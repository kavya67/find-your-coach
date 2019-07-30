const mongoose = require("mongoose")
const Schema = mongoose.Schema

const questionSchema = new Schema({
   questionType: {
       type: String,
       required: true
       
   },
   questionText: {
       type: String,
       required: true,
   },
    questionOptions: [String]

})

const Question = mongoose.model('Question', questionSchema)
module.exports = Question