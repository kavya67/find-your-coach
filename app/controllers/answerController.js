const express = require('express')
const router = express.Router()

const authenticateUser = require('../middleware/authenticateUser')
const Answer = require('../models/answers')

router.post('/', authenticateUser, (req, res)=>{
    const user = req.user
    const body = req.body
    const answer = new Answer(body)
    answer.user = user._id
    user.save()
        .then(answer=>res.send(answer))
        .catch(err=>res.send(err))
})

router.get('/', authenticateUser, (req,res)=>{
    Answer.find({
        user: req.user._id,

    }).populate('question', ['questionText'])
        .then(answers=>res.send(answers))
        .catch(err=>res.send(err))
})

router.get('/:id', authenticateUser, (req,res)=>{
    const id = req.params.id
    Answer.findOne({
        user: req.user._id,
        _id: id
    }).populate('question', ['questionText'])
        .then(answer=>res.send(answer))
        .catch(err=>res.send(err))
})

router.put('/:id', authenticateUser, (req,res)=>{
    const id = req.params.id
    const body = req.body
    Answer.findOneAndUpdate({
        user: req.user._id,
        _id: id
    }, {$set: body}, {new: true, runValidators: true})
        .then(answer=>res.send(answer))
        .catch(err=>res.send(err))
        
})

router.delete('/:id', authenticateUser, (req,res)=>{
    const id = req.params.id
    Answer.findOneAndDelete({
        user: req.user._id,
        _id: id
    })
        .then(()=>res.send('deleted succesfully'))
        .catch((err)=>res.send(err))
})

module.export = router