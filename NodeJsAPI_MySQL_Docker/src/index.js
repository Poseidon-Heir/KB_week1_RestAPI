// import cors from 'cors';
// import  Response  from './domain/response.js';
const express = require('express');
const ip = require('ip');
const dotenv = require('dotenv');
const cors = require('cors');
const Response = require('./domain/response.js');

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({ origin: '*'}));
app.use(express.json());


app.get('/',(req,res) => res.send(new Response.Response(200,'OK','ALL Good response is working',{})));
console.log(process.env);
app.listen(PORT, () => console.log(`Server is running on: ${ip.address()}:${PORT}`));
