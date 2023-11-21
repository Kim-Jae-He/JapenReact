const express = require('express');
// const bodyParser = require('body-parser');

const mysql = require('mysql2/promise');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

// require( 'dotenv').config({path:'../.env.local'});

const dotenv = require('dotenv');
dotenv.config({ path: '../.env.local' });

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

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('김제희!');
});

// 모든 사원 조회
app.get('/api/all', (req, res) => {
  // mysql에서 employees 테이블 모든 행,컬럼 조회
  pool.query('SELECT * FROM tbl_user', (err, rows, fields) => {
    console.log('ddd');
    console.log(err);
    res.json(rows);
  });
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

// 모든 사원 조회
app.get('/api/login', async (req, res) => {
  const { userId, userPw } = req.body;

  // mysql에서 tbl_user 테이블 모든 행,컬럼 조회
  try {
    let sql = ` SELECT user_id, user_password FROM
      tbl_user WHERE user_id =?`;

    const [rows, fields] = await pool.query(sql, [userId]);

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

// 토큰을 전달받아서 로그인한 사람의 email 주소를 되돌려주는 api
app.get('/api/loggedInEmail', (req, res) => {
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
    // console.log(result);

    res.send(result.email);
  } catch (err) {
    console.log(err);
    res.status(403).json('오류발생!');
  }
});

app.get('/api/joins/:userid', async (req, res) => {
  // console.log(req.params);
  const userid = req.params.userid;
  let sql = `
    SELECT user_name, user_id, user_password, user_phone
    from tbl_user
    WHERE user_id = ?
  `;
  try {
    let [rows, fields] = await pool.query(sql, [userid]);

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json('서버 오류 발생');
  }
});

app.post('/api/joins', async (req, res) => {
  console.log(req.body);
  const sql = `INSERT INTO tbl_user 
  (user_id, user_password, user_name, user_phone)
  values (?, ?, ?, ?)
   `;
  let { username, userid, password, phone } = req.body;

  let enPw = bcrypt.hashSync(password, 10);

  try {
    let [result, fields] = pool.query(sql, [username, userid, enPw, phone]);
    console.log('result:', result);
    console.log('fields:', fields);
    res.json('성공이야~');
  } catch (err) {
    if (err.errno === 1406) {
      // 아이디가 컬럼의 최대 허용 용량을 벗어났다 1406
      res.status(400).json({ errCode: 1, errMsg: '아이디가 너무 김' });
    } else if (err.errno === 1062) {
      // 아이디가 중복되었다 1062
      res.status(400).json({ errCode: 2, errMsg: '아이디가 중복됨' });
    } else {
      // 그외
      res.status(400).json({ errCode: 3, errMsg: '서버쪽에서 오류 발생함' });
    }
  }
});

app.listen(port, () => {
  console.log(`express 서버 실행됨! 포트:${port}`);
});
