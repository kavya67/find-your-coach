const mongoose = require('mongoose')
const Schema = mongoose.Schema

const validatorPkg = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
    mobile: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    role: {
        type: String,
        default: 'customer'
    }
})

userSchema.pre('save', function(next){
    const user = this
    if(user.isNew){
        bcryptjs.genSalt(10)
        .then(function(salt){
            bcryptjs.hash(user.password, salt)
                .then(function(encryptedPassword){
                    user.password = encryptedPassword
                    next()
                })
        })
    }else{
        next()
    }
    
})

userSchema.statics.findByCredentials = function(email, password){
    const User = this
    return User.findOne({ email })
        .then(function(user){
            if(!user){
                return Promise.reject('invalid email / password')
            }
            return bcryptjs.compare(password, user.password)
                .then(function(result){
                    if(result){
                        return Promise.resolve(user)
                    }else{
                        return Promise.reject('invalid email / password')
                    }
                })
                
        })
}

userSchema.methods.generateToken = function(){
    const user = this
    const tokenData = {
        _id: user._id,
        username: user.username,
        createdAt: Number(new Date())
    }
    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({
        token
    })

    return user.save()
        .then(function(user){
            return Promise.resolve(token)
        })
        .catch(function(err){
            return Promise.reject(err)
        })
    
}
userSchema.statics.findByToken = function(token){
    const User = this
    let tokenData
        try{
            tokenData = jwt.verify(token, 'jwt@123')
        }
        catch{
            return Promise.reject('invalid email / password')
        }
    return User.findOne({
            _id: tokenData._id,
            'tokens.token': token
        })
}

const User = mongoose.model('User', userSchema)

module.exports = User