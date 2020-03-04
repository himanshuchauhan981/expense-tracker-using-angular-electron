const { userHandler } = require('../handlers')

let userController = {
    loginExistingUsers : async (req,res) =>{
        let response = userHandler.loginExistingUsers(req,res)
        return response
    },

    saveNewUsers : async (req,res) =>{
        console.log('he')
        let response = userHandler.saveNewUsers(req,res)
        return response
    }
}

module.exports = userController