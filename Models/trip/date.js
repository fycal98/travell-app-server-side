const mongoose = require('mongoose')

const DateSchema = new mongoose.Schema({
    date:{type:mongoose.SchemaTypes.Date,required:true},
    users:[{type:mongoose.SchemaTypes.ObjectId,required:true}],
    state:{type:String,required:true,enum:['waiting','confirm']}
    
})


module.exports = DateSchema