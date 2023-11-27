const mysql = require('mysql2')

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password :'grup25bjirkeren',
    database: 'capstone',

   
  });

module.exports = dbPool.promise()