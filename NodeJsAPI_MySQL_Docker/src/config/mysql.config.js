// import mysql from 'mysql';
//  import dotenv from 'dotenv';

const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();
const pool = mysql.createPool({
   
    host: process.env.DB_HOST,
    post: process.env.DB_POST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT
});

//  module.export default pool;
return pool;