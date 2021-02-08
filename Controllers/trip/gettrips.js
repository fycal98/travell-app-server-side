const Trip = require('../../Models/trip/trip')
const gettrips = async function (req,res){
    let title = {}
    let style = {}
    let countries={}
     let date = {}
    if(req.query.title){
        title = {title:req.query.title}
    }
    if(req.query.minDate){

        date = {dates:{$elemMatch : {$and : [{'date': {$gte : req.query.minDate}},{'date': {$lte : req.query.maxDate}}]} }}
        
    }
    if(req.query.style){
        style = {style:req.query.style}
    }
    if(req.query.countries){
       try {console.log('here')
                   countries = {countries:{ $elemMatch :{$in:req.query.countries.split(',')}}}
                   console.log('here1')
       } catch (error) {
           console.log(error)
       }
        
    }

    const trips = await Trip.find({ ...title,...style,...countries,...date}).select(['title','description','price','starC','endC','imageUrl'])
res.send(trips)
}
module.exports = gettrips