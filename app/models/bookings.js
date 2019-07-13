const mongoose = require("mongoose");
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    status: {
        type: String,
        default: "Pending"
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

const Booking = mongoose.model("Booking", bookingSchema)

module.exports = Booking