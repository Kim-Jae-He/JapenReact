import { useNavigate } from 'react-router-dom';
import { LoginButton, LoginContainer } from '../styles/header.styles';
import {
  ALogo,
  ButtonColor,
  Buttoncss,
  Checkid,
  Checkpw,
  ErrMsg,
  FormCon,
  HeaderButton,
  HeaderCon,
  HeaderContainer,
  HeaderLogo,
  Inputid,
  Inputid1,
  Inputpw,
  Inputpw1,
  LoginContainerbox,
  Loginbutton1,
  LogoImage,
  LogoSpan,
  SpanButton,
} from '../styles/login.styles';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../App';

const LoginPage = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const [idErr, setIdErr] = useState('');
  const [pwErr, setPwErr] = useState('');

  //App.js에 있는 accessToken 변수와 setAccessToken 함수 사용하기
  const { setAccessToken } = useContext(UserContext);

  const onIdChange = (e) => {
    const idText = e.target.value;
    setUserId(idText);

    if (idText === '') {
      setIdErr('아이디를 입력해주세요');
    } else {
      setIdErr('');
    }
  };

  const onPwChange = (e) => {
    const pwText = e.target.value;
    setUserPw(pwText);

    if (pwText === '') {
      setPwErr('비밀번호는 필수입니다');
    } else if (pwText.length < 4) {
      setPwErr('최소 4자 이상을 입력해주세요');
    } else {
      setPwErr('');
    }
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    let check = true;

    if (userId === '') {
      setIdErr('아이디를 입력해주세요');
      check = false;
    } else {
      setIdErr('');
    }

    if (userPw === '') {
      setPwErr('비밀번호는 필수입니다');
      check = false;
    } else if (userPw.length < 4) {
      setPwErr('최소 4자 이상을 입력해주세요');
      check = false;
    } else {
      setPwErr('');
    }

    if (check) {
      try {
        let res = await axios.post('/api/login', { userId, userPw });
        if (res.data.success) {
          alert('로그인 성공!');

          // 로그인 성공 시 홈페이지로 이동
          window.location.href = '/';
        } else {
          alert('로그인 실패: ' + res.data.error);
        }
      } catch (err) {
        console.error(err);
        // 에러 처리 로직...
      }
    }
  };

  const onJoinClick = () => {
    navigate('/join', { replace: true });
  };

  const onHomeClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      <HeaderCon>
        <HeaderContainer>
          <HeaderLogo></HeaderLogo>
          <ALogo onClick={onHomeClick}>
            <LogoImage src="/images/logo.svg"></LogoImage>
          </ALogo>
          <a href="../pages/join.js">
            <LogoSpan />
          </a>
          <HeaderButton>
            <ButtonColor onClick={onJoinClick}>
              <Buttoncss>
                <SpanButton>회원가입</SpanButton>
              </Buttoncss>
            </ButtonColor>
          </HeaderButton>
        </HeaderContainer>
      </HeaderCon>
      <LoginContainer style={{ padding: '130px 0px 0px' }}>
        <LoginContainerbox>
          <FormCon onSubmit={loginSubmit}>
            <Checkid>아이디</Checkid>
            <Inputid>
              <Inputid1 onChange={onIdChange} type="text" placeholder="ID" />
            </Inputid>
            <ErrMsg>{idErr}</ErrMsg>
            <Checkpw>비밀번호 </Checkpw>
            <Inputpw>
              <Inputpw1 onChange={onPwChange} type="password" placeholder="비밀번호" />
            </Inputpw>
            <ErrMsg>{pwErr}</ErrMsg>
            <LoginButton>
              <Loginbutton1>로그인</Loginbutton1>
            </LoginButton>
          </FormCon>
        </LoginContainerbox>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
