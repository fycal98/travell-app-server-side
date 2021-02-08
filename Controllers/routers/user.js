var multer  = require('multer')
var upload = multer({limits:{fileSize:4000000},fileFilter(req,file,cb){
    console.log()
    if(file.originalname.endsWith('.png') | file.originalname.endsWith('.jpg') || file.originalname.endsWith('.JPG') | file.originalname.endsWith('.jpeg')){

        return cb(null,true)
    }
    cb(new Error('extention error'),false)
    }})
const express = require('express')
const router = express.Router()
const auth = require('../authentication')
const signin = require('../user/signin')
const login = require('../user/login')
const getusertrip = require('../user/getusertrips')
router.post('/user/signin',upload.single('avatar'),signin,(err,req,res,next)=>{
    console.log(err)
    res.status(400).send({error:err})
})
router.post('/user/login',login )
router.get('/user/trips',auth,getusertrip)
module.exports= router