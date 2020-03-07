const { users } = require('../models')
const bcryptjs = require('bcryptjs')

checkHashedPassword = async(password,hashedPassword)=>{
    let status = bcryptjs.compareSync(password,hashedPassword)
    return status
}

const userHandler = {
    loginExistingUsers : async (req,res)=>{
        let status = await users.findOne({"email":req.body.email})
        if(status != null){
            if(checkHashedPassword(req.body.loginpassword,status.password)){
                res.status(200).send({status:200,usersId: status._id})
            }
            else res.status(200).send({status: 401,loginError:'Incorrect Credentials'})
        }
        else return res.status(200).send({status: 401,loginError:'Incorrect Credentials'})
    },

    saveNewUsers : async (req,res) =>{
        let userStatus = await users.findOne({email: req.body.email })
        if(userStatus === null){
            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(req.body.password,salt)
            req.body.password = hash

            let user = new users(req.body)
            await user.save((err, user) => {
                if (err) {
                    let error = Object.values(err.errors)[0].message
                    res.status(400).send(error)
                }
                else {
                    res.status(200).send({ status:200, msg:'Data Saved',data: user._id })
                }
            })
        }
        else {
            res.status(400).send('User already existed')
        }
    }
}

module.exports = userHandler