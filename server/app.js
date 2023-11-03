const express = require('express');
// const bodyParser = require('body-parser');

const mysql = require('mysql2/promise');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

// require( 'dotenv').config({path:'../.env.local'});
const dotenv = require('dotenv');
dotenv.config({ path: '../.env.project' });

// mysql 설정

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_PORT);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// import express from "express";
// const cors = require('cors');

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('김제희!');
});


app.listen(port, () => {
  console.log(`express 서버 실행됨! 포트:${port}`);
});
