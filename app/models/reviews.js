const mongoose = require("mongoose");
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }, 
    coach: {
        type: Schema.Types.ObjectId,
        ref: "Coach"
    }
})

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review