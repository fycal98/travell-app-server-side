const Trip = require('../../Models/trip/trip')
const Review =require('../../Models/trip/review')

const gettripinfo = async function (req,res){
    let reviews = {}
    let att = []
    if(req.query.att){
        att = req.query.att.split(',') 
    }
    
    
    try{
        const id = req.params.id
const trip = await Trip.findById(id).select(att)
if(att.lastIndexOf('reviews') !== -1){
    
 reviews = await Review.find({tripid:id})
    
}
res.send({trip,reviews})
    }catch(e){
        console.log(e)
        res.status(400).send({error:'not found'})
    }

}
module.exports = gettripinfo