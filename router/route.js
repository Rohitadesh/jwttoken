const express =require('express')

const route = express.Router()

const controllers=require('../middleware/controller')
const {verify} =require('../controllers/auth/index')
const aut = require('../middleware/middleware')

route.post('/register',controllers.post_register_user)

// route.get('/:id',aut.authenicateUser,controllers.get_singleuser)

route.post('/login',verify)

route.get('/login',aut.authenicateUser,(req,res)=>{
    res.send('hkdfkhbng')
    // console.log(res)
})


module.exports=route