const express = require('express')

const { userController } = require('../controller')

module.exports = () =>{
    const router = express.Router()

    router.post('/login', userController.loginExistingUsers)

    router.post('/signup', userController.saveNewUsers)

    return router
}
