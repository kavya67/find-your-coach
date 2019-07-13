const router = require("express").Router();

const authenticateUser = require("../middleware/authenticateUser");
const Booking = require("../models/bookings");
const _ = require("lodash")

router.post("/", authenticateUser, (req, res) => {
    const user = req.user
    const body = req.body
    body["user"] = user._id
    if(user.role === "customer") {
        const booking = new Booking(body)
        booking.save()
            .then(booking => res.send(booking))
            .catch(err => res.send(err))
    } else {
        res.status(401).send({notice: "You are not a customer"})
    }
})

router.get("/", authenticateUser, (req, res) => {
    const user = req.user
    const id = user._id
    Booking.find({coach: id})
        .then(booking => res.send(booking))
        .catch(err => res.send(err))
})

router.put("/:id", authenticateUser, (req, res) => {
    const user = req.user
    const id = req.params.id
    const body = req.body
    if(user.role === "coach") {
        Booking.findOneAndUpdate({_id: id}, {$set: body}, { new: true, runValidators: true})
            .then(booking => res.send(booking))
            .catch(err => res.send(err))
    } else {
        res.status(401).send({notice: "You cannot access this page"})
    }
})


module.exports = router