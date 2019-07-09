const authorizeUser = function(req, res, next) {
    const { user } = req
    if(user.role = "admin") {
        console.log("admin authorized")
        next()
    } else if(user.role = "coach"){
        console.log("admin authorized")
        next()
    } else {
        res.status('401').send({ notice: 'unauthorized action'})
    }
}

module.exports = {
    authorizeUser
}