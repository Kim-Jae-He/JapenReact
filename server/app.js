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

// const loginList = [
//   {
//     id: 'aaa',
//     password: '1234',
//     phone: '01012345678',
//   },
// ];

// app.get('/api/loginup', (req, res) => {
//   res.json(loginList);
// });

// app.get('/api/loginup', (req, res) => {
//   const { id, password, phone } = req.body;
//   loginList.push({
//     id,
//     password,
//     phone,
//   });
//   return res.send('성공입니다');
// });

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// 모든 사원 조회
app.get('/api/login', async (req, res) => {
  const { userId, userPw } = req.body;

  try {
    // mysql에서 tbl_user 테이블 모든 행,컬럼 조회
    let sql = ` SELECT user_id, user_password FROM
      tbl_user WHERE user_id = ?`;

    const [rows, fields] = await pool.query(sql, [user_id]);

    console.log(rows);
    if (rows.length === 0) {
      res.status(404).json('로그인실패입니다');
      return;
    }
    if (!bcrypt.compareSync(userPw, rows[0].pw)) {
      // 이메일은 맞췄지만 비밀번호는 틀렸을때
      res.status(404).json('로그인 실패!');
      return;
    }

    const accessToken = jwt.sign({ userId: rows[0].userId }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    console.log(accessToken);
    res.json({ accessToken });
  } catch (err) {
    res.status(500).json('mysql에서 오류 발생');
  }
});

app.get('/api/jsonwebtokentest', (req, res) => {
  let myToken = jwt.sign({ userId: 'kimj' }, 'tokenpw', {
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
