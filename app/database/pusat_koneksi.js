// Ini buat model
// pusat koneksi ke database

const sequelize = require('sequelize')
const mysql = require('mysql2')


// ini ngedefine database mana yang mau dipake dari MySQL
// ini dia ngebuka connection
const connection = new sequelize.Sequelize('capstone', 'root', 'grup25bjirkeren',{
    host:'localhost',
    dialect:'mysql',
    logging:false
} )




// ini ngambil semuanya
// conn.query('SELECT * FROM database_latihan_revou.senjata;')

module.exports = connection