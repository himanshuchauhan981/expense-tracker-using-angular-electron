const userHandler = {
    loginExistingUsers : async (req,res)=>{
        if(req.body.email === 'himanshu@gmail.com' && req.body.password === 'himanshu'){
            res.status(200).send({status:200})
        }
        else res.status(200).send({status: 401})
    }
}

module.exports = userHandler