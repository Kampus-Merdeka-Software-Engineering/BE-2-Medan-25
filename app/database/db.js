const mysql = require('mysql2')

const fs = require('fs')
const path = require('path')


const filePath = path.join('app','model', 'ca.pem')


const dbPool = mysql.createPool({
  
    host: 'mysql-39d3fe10-capstone-grup25.a.aivencloud.com',
    user: 'avnadmin',
    password :'AVNS_5aeFfoUVv2bynKdy_DR',
    database: 'capstone',
    port:25554,
    ssl: {    ca: fs.readFileSync(filePath)  }
    

   
  });

module.exports = dbPool.promise()