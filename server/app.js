const express = require('express');
// const bodyParser = require('body-parser');

const mysql = require('mysql2/promise');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

// require( 'dotenv').config({path:'../.env.local'});

const dotenv = require('dotenv');
dotenv.config({ path: '../.env.project' });



const app = express();
const port = 3002;

// mysql 설정

// console.log(process.env.DB_HOST);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_DATABASE);
// console.log(process.env.DB_PASSWORD);
// console.log(process.env.DB_PORT);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/api', (req, res) => {
  res.send('김제희!');
});

const loginList = [
  {
    id: 'aaa',
    password: '1234',
    phone: '01012345678',
  },
];

app.get('/api/loginup', (req, res) => {
  res.json(loginList);
});

app.get('/api/loginup', (req, res) => {
  const { id, password, phone } = req.body;
  loginList.push({
    id,
    password,
    phone,
  });
  return res.send('성공입니다');
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// 모든 사원 조회
app.get('/api/employees', (req, res) => {
  // mysql에서 employees 테이블 모든 행,컬럼 조회
  pool.query('SELECT * FROM employees', (err, rows, fields) => {
    console.log('ddd');
    console.log(err);
    res.json(rows);
  });
});

// 사원 한명 추가
app.post('/api/employees', () => {});

app.post('/api/employees', () => {});

// 토큰을 전달받아서 로그인한 사람의 email 주소를 되돌려주는 api
app.get('/api/loggedInId', (req, res) => {
  // 리액트로부터 전달받은 토큰이 정상적인지 확인하고
  // 정상적이지 않으면 오류로 응답
  // 정상적이면 email주소로 응답
  // 토큰은 요청 header 의 Authorization에 Bearer .....
  // console.log(req.headers.authorization)
  // 문자열
  const token = req.headers.authorization.replace('Bearer ', '');
  // console.log(token);
  // token은 로그인 당시 발급 받은 토큰

  try {
    let result = jwt.verify(token, process.env.JWT_SECRET);
    console.log(result);

    res.send(result.email);
  } catch (err) {
    console.log(err);
    res.status(403).json('오류발생!');
  }
});

app.get('/api/users/:userId', async (req, res) => {
  const userId = req.prams.userId;

  try {
    let [rows, fields] = await pool.query(
      `SELECT idx, user_id, password, user_name, phone from tbl_user 
    WHERE user_id=?`,
      [userId]
    );
    res.json(row[0]);
  } catch (err) {
    res.status(500).json('서버오류 발생');
  }
});

app.get('/api/jsonwebtokentest', (req, res) => {
  let myToken = jwt.sign({ email: 'abc@naver.com' }, 'tokenpw', {
    expiresIn: '0.1s',
  });

  console.log(myToken);

  // let decoded = jwt.decode(myToken );
  // console.log(decoded);

  let verify = jwt.verify(myToken, 'tokenpw');

  console.log(verify);

  res.json('응답끝');
});

app.listen(port, () => {
  console.log(`express 서버 실행됨! 포트:${port}`);
});
