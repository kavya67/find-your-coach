const express = require("express");
const router = express.Router();

const {authenticateUser} = require("../middleware/authenticateUser");
const {authorizeUser} = require("../middleware/authorizeUser");
const Coach = require("../models/coach");

router.get("/", (req, res) => {
    Coach.find().populate("userId")
        .then(coaches => { res.send(coaches) })
        .catch(err => { res.status(500).send({ status: "internal server issue" }) })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    Coach.findById(id).populate("category")
        .then(coaches => { res.send(coaches) })
        .catch(err => { res.status(500).send({ status: "internal server issue" }) })
})

router.post("/", authenticateUser, authorizeUser, (req, res) => {
    const body = req.body
    const coach = new Coach(body)
    coach.save()
        .then(coach => res.send(coach))
        .catch(err => res.send(err))
})

router.put("/:id", authenticateUser, authorizeUser, (req, res) => {
    const id = req.params.id
    const body = req.body
    Coach.findByIdAndUpdate({_id: id}, {$set: body}, {new: true, runValidators: true})
        .then(coach => res.send(coach))
        .catch(err => res.send(err))
})

router.delete("/:id", authenticateUser, authorizeUser, (req, res) => {
    const id = req.params.id
    Coach.findByIdAndDelete(id)
        .then(coach => res.send(coach))
        .catch(err => res.status(500).send({ status: "internal server issue" }))
})

module.exports = {
    coachRouter: router
}