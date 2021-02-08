const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    ownerId:[{type:mongoose.SchemaTypes.ObjectId,required:true}],
    text:{type:String,required:true,},
    
},{timestamps:true})


module.exports = MessageSchema