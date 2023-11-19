const jwt =require('jsonwebtoken')

let accessTokenSecret='7f78a400b9103d2247eb0137620d9032e5c6ff893655ab7c64612d638321cccca3b85620d1acb4b68affec267e7a72a99f67900f3f1db5a2e1558f9bcf387a58'

let token=accessTokenSecret
exports.authenicateUser = (req,res,next)=>{
    console.log('$$$$$$$$$$$$$$$$$$$$')
    

    console.log(req.headers["authorization"],"headers")
    // console.table(token)
    if(!token) return res.status(401).send('no token')
    // jwt.verify(token,accessTokenSecret,(err,user)=>{
    //     if(err) return res.status(403).send('not valid token')
    //     else{   
    //         // console.log(req.body)
    //         // req.body = trimStrings(req.body)
    //     }
    //     console.log(user)

    // })
    next()

}

function trimStrings(object){
    let keyes = Object.keys(object)
    if(keyes.length){
        for(key of keyes){
            object[key] = object[key].trim()
        }
    }
    return object
}