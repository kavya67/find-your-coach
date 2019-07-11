const router = require("express").Router()

const authenticateUser = require("../middleware/authenticateUser");
const authorizeUser = require("../middleware/authorizeUser");
const Location = require("../models/locations");

router.post("/", authenticateUser, authorizeUser, (req, res) => {
    const user = req.user
    if(user.role === "admin"){
        const body = req.body
        body["user"] = user._id
        const location = new Location(body)
        location.save()
            .then(location => res.send(location))
            .catch(err => req.send(err))
    } else {
        res.send({status: "user unauthorized"})
    }
})

router.get("/", authenticateUser, (req, res) => {
    Location.find()
        .then(location => res.send(location))
        .catch(err => req.send(err))
})

router.get("/:id", authenticateUser, (req, res) => {
    const id = req.params.id
    Location.findOne({_id: id})
        .then(location => res.send(location))
        .catch(err => res.send(err))
})

router.delete("/:id", authenticateUser, (req, res) => {
    const id = req.params.id
    const user = req.user
    if(user.role === "admin"){
    Location.findOneAndDelete({_id: id})
        .then(() => res.send({status: "successfully deleted"}))
        .catch(err => res.send(err))
    } else {
        res.send({status: "user unauthorized"})
    }
})

module.exports = router