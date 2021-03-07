// require('dotenv').config()

// const express   = require('express');
// const morgan    = require('morgan');
// const helmet    = require('helmet');

// const {Client}   = require('pg')

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'AdvWebMovieProject',
//     password: 'info@12345',
//     port: 5432,
//     })
// client.connect()
// const db1 = client.connection;
// //console.log(db1.)
// db1.on('error', console.error.bind(console, 'connection error:'));
// db1.once('open', function() {
//   console.log('Connected to Postgres !');
// });


//     var query = client.query("select doc_firstname from doctors");
//     //fired after last row is emitted
    
//     query.on('row', function(row) {
//         console.log(row);
//     });
    
//     query.on('end', function() {
//         client.end();
//     });
// var pg = require('pg');
// var conString = "postgres://postgres:info@12345@localhost:5432/MydataBase";

// var client = new pg.Client(conString);
// //client.connect();

//     // var query = client.query("select doc_firstname from doctors");
//     //fired after last row is emitted
    
//     await client.connect();
//     var res = await client.query("select doc_firstname from doctors");
//     res.rows.forEach(row=>{
//         console.log(row);
//     });
//     await client.end();
const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:info@12345@localhost:5432/MydataBase'
const pool = new Pool({
    connectionString: connectionString,
  })
  
  
  pool.query('select doc_firstname from doctors', (err, res) => {
   // console.log(err, res)
    console.log('name:', res.rows);
    pool.end()
  })
