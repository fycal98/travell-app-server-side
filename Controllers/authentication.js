const Token = require('jsonwebtoken')
const User = require('../Models/user')
const auth = async function (req, res, next){
    try{
        const token = req.headers.authorization
    const id = Token.verify(token,'Fycalassam98')
    let user
    if(req.query.limit){
        
         user = await User.findOne({_id:id}).populate({path:'trips',select :['title','imageUrl','description'],options:{limit:req.query.limit}})

    }else
    {
     user = await User.findOne({_id:id}).populate('trips',['title','imageUrl','description'])

    }
    
    
    if(!user._id ){
        throw ''
    }
    const a = {hu:"yes"}
    req.auth = {id}
    req.auth.user = user
    

    next()
    }catch(e){
        console.log(e)
    res.status(400).send('unauthorized')
    }
}
module.exports = auth