const User = require('../models/user')

const authenticateUser = function(req, res, next){
    const token = req.header('x-auth')
    User.findByToken(token)
        .then(user=>{
            if(user){
                req.user = user,
                req.token = token
                next()
            }else{
                res.status('401').send('invalid email / password')
            }
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports = authenticateUser