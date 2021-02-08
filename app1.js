require('./db')
const express = require('express')
const userRouter = require('./Controllers/routers/user')
const tripRouter = require('./Controllers/routers/trip')

const app = express()

app.use(express.json())
app.use(express.static('./uploads/'))
app.use(userRouter)
app.use(tripRouter)
app.listen(3000,(()=>{
console.log('started listning on port 3000')
}))
