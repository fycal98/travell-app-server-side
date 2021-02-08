const path = require('path')
const fs = require('fs')
var multer  = require('multer')
var upload = multer()
const Token = require('jsonwebtoken')
const User = require('../../Models/user')
const bcrypt = require('bcrypt')
const signin = async function (req,res){
    try{
        if(!req.file){
            throw 'no avatar provided'
        }
        const time = new Date()
        
        const  user = new User({...JSON.parse(req.body.data),imageUrl:time+'.png'})
        
    await user.save()
    fs.writeFileSync('./uploads/'+time+'.png',req.file.buffer)
    const token = Token.sign(user._id.toString(),'Fycalassam98')
    res.send({token,email:user.email,username:user.username,imageUrl:user.imageUrl})
    }catch(error){
        console.log(error)
        res.status(400).send({error})
    }

}
module.exports = signin
