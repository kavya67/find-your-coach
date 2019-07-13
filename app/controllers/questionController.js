const express = require('express')
const router = express.Router()

const authenticateUser = require('../middleware/authenticateUser')
const authorizeUser = require('../middleware/authorizeUser')
const Question = require('../models/questions')

router.post('/', authenticateUser, authorizeUser, (req,res)=>{
    const user = req.user
    if(user.role === 'admin'){
        const body = req.body
        console.log(body)
        const question = new Question(body)
        question.save()
            .then(question=>res.send(question))
            .catch(err=>res.send(err))
    }else{
        res.send({status: "user unauthorized" })
    }
})

router.get('/', authenticateUser, (req,res)=>{
    Question.find()
        .then(questions=>res.send(questions))
        .catch(err=>res.send(err))
})

router.get('/:id', authenticateUser, (req,res)=>{
    const id = req.params.id
    Question.findOne({
        _id: id
    })
        .then(question=>res.send(question))
        .catch(err=>res.send(err))
})

router.put('/:id', authenticateUser, (req,res)=>{
    const id = req.params.id
    const body = req.body
    Question.findOneAndUpdate({
        _id: id
    }, {$set: body}, {new: true, runValidators: true})
        .then(question=>res.send(question))
        .catch(err=>res.send(err))
})

router.delete('/:id', authenticateUser, (req,res)=>{
    const id = req.params.id
    Question.findOneAndDelete({_id: id})
        .then(()=>res.send('successfully deleted'))
        .catch(err=>res.send(err))
})

module.exports = router