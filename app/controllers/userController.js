const express = require('express')
const router = express.Router()

const User = require('../models/user')
const authenticateUser = require('../middleware/authenticateUser')

//localhost:3004/users/register

router.post('/register', (req,res)=>{
    const body = req.body
    const user = new User(body)
    user.save()
        .then(user=>res.send(user))
        .catch(err=>res.send(err))
})

//localhost:3004/users/login

router.post('/login', (req, res)=>{
    const body = req.body
    User.findByCredentials(body.email, body.password)
        .then(user=>{
            return user.generateToken()
            // res.send(user)
        })
            .then(token=>{
                console.log(token)
                res.send({token})
            })

        .catch(err=>res.send(err))
})

router.get('/account', authenticateUser, (req,res)=>{
    const {user} = req
    res.send(user)

})

router.delete('/logout', authenticateUser, (req,res)=>{
    const {user, token} = req
    User.findByIdAndDelete(user._id, {$pull: {tokens: {token:token}}})
        .then(()=>{
            res.send('successfully logged out ')
        })
        .catch(err=>res.send(err))
})

module.exports = router