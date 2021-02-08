const Token = require('jsonwebtoken')
const User = require('../../Models/user')
const bcrypt = require('bcrypt')
const login = async function (req,res){
    try{
        const  user = await User.FindByEmailAndPassword(req.body)
        if(!user){
            throw 'authentication error'
        }
        if(!bcrypt.compareSync(req.body.password,user.password)){
            throw 'authentication error'
        }
    const token = Token.sign(user._id.toString(),'Fycalassam98')
    res.send({token,email:user.email,username:user.username,imageUrl:user.imageUrl})
    }catch(error){
        console.log(error)
        res.status(400).send({error})
    }
}
module.exports = login