const express = require('express')
const app = express()
const port=8000

const cors =require('cors')
app.use(cors('*'))
app.use(express.json())

const user_route=require('./router/route')
app.use('/',user_route)






app.listen(port,()=>{
    console.log(`${port} running sucessfull`)
})