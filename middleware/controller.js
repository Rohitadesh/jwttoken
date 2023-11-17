const{getConnectionFromPool,getFormattedQuery}=require('../models/model')
// const { connect } = require('../router/route')
const {getOne}=require('../models/operatiors')
exports.post_register_user = async(req,res)=>{
    try{
        // let connection = await getpoolconnection()
        let {name,email,password,confirm_password} = await req.body
        // console.log(name,email,password,confirm_password)
        let query='insert into login(name,email,password,confirm_password) values (?)'
        let values=[name,email,password,confirm_password]
        pool.query(query,[values],(error,result)=>{
            if(error){
                console.log(error)
                res.status(202).send(error)
            }
            else{
                // console.log(result)

                res.status(201).send('successfullregistered')
            }

        })
    }
    catch(err){
        console.log(err)
    }
}



exports.get_singleuser = async (req,res)=>{
    // let connection,formatedquery
    try{
        let uid = await req.params.id 
        // console.log(uid,req,"req")
        let queries= 'select email, password from login where id=?'
        let connection= await getConnectionFromPool()
        let formatedquery= await getFormattedQuery(connection,queries,[uid])
        let result = await getOne(connection,formatedquery)
        // console.log(result)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}
