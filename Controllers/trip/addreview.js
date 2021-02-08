const Review = require('../../Models/trip/review')
const addreview = async function (req,res){
    try{
        const  review = new Review(req.body)
        
    await review.save()
    res.send(review._id)
    }catch(error){
        
        res.status(400).send({error})
    }

}
module.exports = addreview