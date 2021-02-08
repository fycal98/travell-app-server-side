const mongoose = require('mongoose')

const ExtraSchema = new mongoose.Schema({
    ImageUrl:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true}, 
})


module.exports = ExtraSchema