const { userHandler } = require('../handlers')

let userController = {
    loginExistingUsers : async (req,res) =>{
        let response = userHandler.loginExistingUsers(req,res)
        return response
    }
}

module.exports = userController