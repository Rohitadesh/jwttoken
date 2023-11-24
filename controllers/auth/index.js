// const {getpoolconnection,formating} =require('../../models/model')
const{getConnectionFromPool,getFormattedQuery}=require('../../models/model')
const {getOne} =require('../../models/operatiors')
let jwt =require('jsonwebtoken')
const queries=require('../auth/query')

const accessTokenSecret= '7f78a400b9103d2247eb0137620d9032e5c6ff893655ab7c64612d638321cccca3b85620d1acb4b68affec267e7a72a99f67900f3f1db5a2e1558f9bcf387a58'


const verify = async (req,res)=>{
    let connection ,formatedquery
    try{
      let {email,password} =await req.body
      // console.log(email,password)
      connection= await  getConnectionFromPool()
      formatedquery= await getFormattedQuery(connection,queries.verifyuser.user,[email,password])
      // console.log(formatedquery)
      let result= await getOne(connection,formatedquery)
      // console.log(result)
      let accesstokens= jwt.sign(...result,accessTokenSecret)
      console.log(accesstokens)
      res.status(200).send({...result,accesstokens})
    }
    catch(error){
      console.log(error)
      res.send(error)    
    }
} 


module.exports={verify}