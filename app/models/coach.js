const mongoose = require("mongoose")
const Schema = mongoose.Schema

const coachSchema = new Schema({
    imageUrl: {
        type: String
    },
    description: {
        type: String
    },
    locations: [
        {
            location: {
                type: Schema.Types.ObjectId,
                ref: "Location"
            }
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Coach = mongoose.model("Coach", coachSchema)

module.exports = Coach