// MAIN
// kedua modul ini bawaan jd gaperlu npm
const express = require("express");
const path = require("path");
const http = require('http');
const port = 3000;


// untuk init express server dan router
const app = express() ;

// untuk nyambungin ke router
const mainRouter = require('./app/routes');


// untuk express bisa response json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// nyambungin ke router
app.use("/", mainRouter);



// cara manggilnya http://localhost:3000/main/namanya.html
// ini hubungin ke HTML (buat 1 folder, yaitu static) //

// app.use('/main', express.static(path.join(__dirname, 'src')))



// sambungin ke Databasee //
const connection = require('./app/database/pusat_koneksi')





// untuk nyalain server //
app.listen(port, function(){
    console.log(`server dah nyala di localhost:${port}`)
    connection.authenticate()
    .then(function(){
        console.log("database terhubung")
    })
    .catch(function(err){
        console.log('terjadi error', err)
        process.exit()
    })
})

