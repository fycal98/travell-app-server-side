const Trip = require('../../Models/trip/trip')
const addtrip = async function (req,res){
    try{
        const  trip = new Trip(req.body)
    await trip.save()
    res.send(trip._id)
    }catch(error){
        console.log(error)
        res.status(400).send({error})
    }

}
module.exports = addtrip