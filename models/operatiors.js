
const getOne = (connection,query) => {
    // console.log('query === ',query)
    return new Promise((resolve,reject) => {
        connection.query(query,(err,result) => {
            if(err){
              console.log(err)
              reject(err)
            }else{
              // console.log(result)
              resolve(result) 
            }
         })
    })
}


module.exports={getOne}