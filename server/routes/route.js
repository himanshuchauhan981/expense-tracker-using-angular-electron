const express = require('express')

const { userController } = require('../controller')

module.exports = () =>{
    const router = express.Router()

    router.post('/login',userController.loginExistingUsers)
    return router
}
