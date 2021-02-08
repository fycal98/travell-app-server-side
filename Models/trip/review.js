const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    owner:{type:String,required:true},
    rating:{type:Number,required:true,min:0,max:5},
    title:{type:String,required:true,},
    imageUrl:{type:String,required:true,},
    ownerid:{type:mongoose.SchemaTypes.ObjectId,required:true,},
    tripid:{type:mongoose.SchemaTypes.ObjectId,required:true},
    text:{type:String,required:true,},
    
},{timestamps:true})
const review = mongoose.model('review',ReviewSchema)


module.exports = review