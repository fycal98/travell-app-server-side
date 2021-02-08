const getusertrip = async function (req,res){    
res.send(req.auth.user.trips)
}
module.exports = getusertrip