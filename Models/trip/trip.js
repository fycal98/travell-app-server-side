const mongoose = require('mongoose')
const DateSchema = require('./date')
const  validator = require('validator');
const ItinerarySchema = require('./itinerary/itinerary')
const MessageSchema = require('./message')
const TripSchema = new mongoose.Schema({
    title:{type:String,required:true,trim:true},
    imageUrl:{type:String,required:true,validate:function (value){
        if(validator.isURL(value)){
            return true
        }
        return false
    }},
    description:{type:String,required:true,trim:true},
    price:{type:Number,required:true,trim:true},
    starC:{type:String,required:true,trim:true},
    endC:{type:String,required:true,trim:true},
    style:{type:String,required:true,enum:['sailing','camping','explorer','hotel trips']},
    countries:[{type:String}],
    dates:[DateSchema],
    itineraries:[ItinerarySchema],
    messages:[MessageSchema],

})


const trip = mongoose.model('trip',TripSchema)
module.exports = trip
