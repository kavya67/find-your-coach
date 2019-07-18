const router = require("express").Router();

const authenticateUser = require("../middleware/authenticateUser");
const authorizeUser = require("../middleware/authorizeUser");
const Review = require("../models/reviews");
const _ = require("lodash")

router.post("/", authenticateUser, (req, res) => {
    const user = req.user
    if(user.role === "customer"){
        const body = req.body
        body["user"] = user._id
        const review = new Review(body)
        review.save()
            .then(review => res.send(review))
            .catch(err => res.send(err))
    } else {
        res.status(404).send({notice: "user not authorized"})
    }
})

router.get("/", authenticateUser, (req, res) => {
    Review.find()
        .then(reviews => res.send(reviews))
        .catch(err => res.send(err))
})

router.get("/:id", authenticateUser, (req, res) => {
    const id = req.params.id
    Review.findOne({_id: id})
        .populate({
            path: "coach",
            select: "imageUrl",
            populate: {
                path: "user",
                model: "User",
                select: "username email"
            }
        })
        .then(review => res.send(_.pick(review, ["description", "rating", "coach.imageUrl", "coach.user.username"])))
        .catch(err => res.send(err))
})

router.put("/:id", authenticateUser, (req, res) => {
    const id = req.params.id
    const body = req.body
    Review.findOneAndUpdate({_id: id}, {$set: body}, {new: true, runValidators: true})
        .then(review => res.send(review))
        .catch(err => res.send(err))
})

router.delete("/:id", authenticateUser, authorizeUser, (req, res) => {
    const id = req.params.id
    const user = req.user
    if(user.role === "admin") {
        Review.findOneAndDelete({_id: id})
            .then(() => res.send({status: "successfully deleted"}))
            .catch(err => res.send(err))
    } else {
        res.send({status: "user unauthorized"})
    }
})


module.exports = router;