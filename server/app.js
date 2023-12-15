const express = require('express');

const bodyParser = require('body-parser');

// 데이터베이스 이전설정
// const fs = require('fs');
// const data = fs.readFileSync('./database.json');
// const consf = JSON.parse(data);
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: conf.host,
//   user: conf.user,
//   password: conf.password,
//   port: conf.port,
//   database: conf.database,
// });
// connection.connect();

const mysql = require('mysql2/promise');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

// require( 'dotenv').config({path:'../.env.local'});

const dotenv = require('dotenv');
dotenv.config({ path: '../.env.project' });

const app = express();
const port = 3002;

// mysql 설정
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('김제희!');
});

// 모든 사원 조회
app.get('/api/all', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM tbl_user');
    console.log(rows);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(404).json('서버오류입니다');
    return;
  }
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

// 로그인
app.post('/api/login', async (req, res) => {
  const { userId, userPw } = req.body;

  try {
    let sql = `SELECT user_id, user_password FROM tbl_user WHERE user_id = ?`;

    const [rows, fields] = await pool.query(sql, [userId]);

    //console.log('rows:', rows);
    if (rows.length === 0) {
      res.status(401).json({ error: '사용자를 찾을 수 없습니다.' });
      return;
    }

    if (!bcrypt.compareSync(userPw, rows[0].user_password)) {
      res.status(401).json({ error: '비밀번호가 일치하지 않습니다.' });
      return;
    }

    const accessToken = jwt.sign({ userId: rows[0].userid }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    //토큰값 출력
    //console.log(accessToken);
    res.json({ accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: '서버에서 오류가 발생했습니다.' });
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

// 토큰을 전달받아서 로그인한 사람의 id 주소를 되돌려주는 api
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
    // console.log(result);

    res.send(result.user_id);
  } catch (err) {
    console.log(err);
    res.status(403).json('오류발생!');
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

//회원가입후 유저조회
app.get('/api/joins/:user_id', async (req, res) => {
  // console.log(req.params);
  const userid = req.params.userid;
  let sql = `
    SELECT user_name, user_id, user_password, user_phone
    from tbl_user
    WHERE user_id = ?
  `;
  try {
    const [rows, fields] = await pool.query(sql, [userid]);

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json('서버 오류 발생');
  }
});

//회원가입

app.post('/api/joins', async (req, res) => {
  try {
    console.log(req.body);
    const { username, userid, user_password, user_phone } = req.body;

    // 중복된 아이디 체크
    const checkDuplicateQuery = 'SELECT COUNT(*) AS count FROM tbl_user WHERE user_id = ?';
    const [duplicateCheckResult] = await pool.execute(checkDuplicateQuery, [userid]);

    if (duplicateCheckResult[0].count > 0) {
      // 중복된 아이디가 이미 존재함을 클라이언트에게 알림
      return res.status(400).json({ errCode: 2, errMsg: '이미 존재하는 아이디입니다.' });
    }

    // 중복된 아이디가 없을 경우 삽입
    const insertQuery = `
      INSERT INTO tbl_user 
      (user_name, user_id, user_password, user_phone)
      VALUES (?, ?, ?, ?)
    `;
    let enPw = bcrypt.hashSync(user_password, 10);
    await pool.execute(insertQuery, [username, userid, enPw, user_phone]);

    res.json('성공이야~');
  } catch (err) {
    console.error(err);

    if (err.code === 'ER_DATA_TOO_LONG') {
      res.status(400).json({ errCode: 1, errMsg: '데이터가 너무 깁니다.' });
    } else {
      res.status(500).json({ errCode: 3, errMsg: '서버 쪽에서 오류 발생함', err });
    }
  }
});


// app.post('/api/joins', async (req, res) => {
//   try {
//     console.log(req.body);
//     const sql = `
//       INSERT INTO tbl_user 
//       (user_name, user_id, user_password, user_phone)
//       VALUES (?, ?, ?, ?)
//     `;

//     let { username, userid, user_password, user_phone } = req.body;

//     // bcrypt.hashSync를 사용하여 비밀번호를 해싱
//     let enPw = bcrypt.hashSync(user_password, 10);

//     let [result, fields] = await pool.execute(sql, [username, userid, enPw, user_phone]);

//     console.log('result:', result);
//     console.log('fields:', fields);

//     res.json('성공이야~');
//   } catch (err) {
//     console.error(err);

//     if (err.code === 'ER_DATA_TOO_LONG') {
//       res.status(400).json({ errCode: 1, errMsg: '데이터가 너무 깁니다.' });
//     } else if (err.code === 'ER_DUP_ENTRY') {
//       console.error('중복된 아이디입니다.');
//       res.status(400).json({ errCode: 2, errMsg: '이미 존재하는 아이디입니다.' });
//     } else {
//       console.error('MySQL 오류:', err.sqlMessage);
//       res.status(500).json({ errCode: 3, errMsg: '서버 쪽에서 오류 발생함', err });
//     }
//   }
// });





app.listen(port, () => {
  console.log(`express 서버 실행됨! 포트:${port}`);
});
