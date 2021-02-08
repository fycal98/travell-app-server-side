const mongoose = require('mongoose')
const ExtraSchema = require('./extra')
const ItinerarySchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    dayNumber:{type:Number,required:true},
    details:[{type:String}],
    extras:[ExtraSchema]
    
})


module.exports = ItinerarySchema