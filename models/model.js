const mysql = require('mysql2')


const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"userlogins"
})

const getConnectionFromPool = () => {
    return new Promise((resolve,reject) => {
        pool.getConnection((err,connection) => {
            if(err){
                console.log(err)
                reject(err)
            }else{
                resolve(connection)
            }
        })
    })
}

const getFormattedQuery = (connection,query,params) => {
    return connection.format(query,params) 
}


module.exports = {
    getConnectionFromPool,
    getFormattedQuery
}

