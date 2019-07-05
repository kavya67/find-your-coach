const mongoose = require('mongoose')
const validatorPkg = require('validator')
const Schema = mongoose.Schema

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        validator: function(value){
            return validatorPkg.isEmail(value)
        },
        message: function(){
            return 'invalid email / password'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 128,
        
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Number(Date.now())
            }
        }
    ],
    role: {
        type: String,
        default: 'customer'
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User