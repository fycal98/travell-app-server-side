const express = require('express')
const router = express.Router()
const addtrip = require('../trip/addtrip')
const addreview = require('../trip/addreview')
const gettrips = require('../trip/gettrips')
const gettripinfo = require('../trip/gettripinfo')
router.get('/trip',gettrips)
router.get('/trip/:id',gettripinfo)
router.post('/trip/add',addtrip)
router.post('/trip/addreview',addreview)
module.exports= router

