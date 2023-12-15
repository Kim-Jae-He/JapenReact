import { More } from '@mui/icons-material';
import {
  Body,
  BottomHeaderContainer,
  BottomHeaderContainerInner,
  ButtonLogo,
  HeaderBigContainer,
  HeaderSmallContainer,
  Href,
  ImgLogo,
  ItemContainer,
  ItemContainer1,
  ItemContainer1Container,
  ItemContainer1Title,
  JoinButton,
  LoginButton,
  LoginContainer,
  LoginJoinContainer,
  LogoContainer,
  Mainheader,
  MainpageContainer,
  NavContainer,
  SearchContainer,
  SearchContainerInput,
  SearchContainerInput2,
  SearchContainerInputImg,
  SearchContainerInputImgValue,
  SearchInput,
} from '../styles/header.styles';
import { UserContext } from '../App';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HeaderPages = (props) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [username, setUsername] = useState(''); // username 상태 추가
  const [password, setPassword] = useState(''); // password 상태 추가
  const [isLoggedIn, setIsLoggedIn] = useState(false); // isLoggedIn 상태 추가

  //헤더부분 카테고리 마우스올리면 텍스트 색상 변경
  const HeaderColorOver = (e) => {
    //텍스트에 마우스가 올라갈때
    e.target.style.color = 'rgb(121, 190, 245)';
  };

  const HeaderColorOut = (e) => {
    //텍스트에 마우스가 내려갈때
    e.target.style.color = 'black';
  };

  const LoginJoinCon = (e, color) => {
    e.target.style.backgroundColor = color;
  };

  /////////////////////////////////////////////////////////////////

  // 홈페이지,로그인,회원가입 클릭시 경로이동
  const onButtonClick = (path) => {
    navigate(path, { replace: true });
  };


  // 사용자가 로그인되어 있는지 확인하고 사용자 데이터를 가져오기
  useEffect(() => {
    const checkLoggedInUser = async () => {
      const storedAccessToken = localStorage.getItem('accessToken');

      if (!storedAccessToken) {
        // 토큰이 없으면 사용자가 로그인되어 있지 않음
        return;
      }

      try {
        const res = await axios.get('/api/loggedInId', {
          headers: { Authorization: `Bearer ${storedAccessToken}` },
        });

        // ID를 사용하여 추가 사용자 데이터 가져오기
        const res2 = await axios.get(`/api/login/${res.data}`);
        setLoggedInUser(res2.data);
        setAccessToken(storedAccessToken);
      } catch (err) {
        // 오류 처리, 예를 들어 토큰 만료 또는 사용자가 로그인되어 있지 않음
        console.log(err);
        localStorage.removeItem('accessToken');
        setLoggedInUser(null);
        setAccessToken(null);
        navigate('/login', { replace: true });
      }
    };

    checkLoggedInUser();
  }, [navigate]);

  // 로그아웃 핸들러
  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 제거하고 사용자를 null로 설정
    localStorage.removeItem('accessToken');
    setLoggedInUser(null);
    setAccessToken(null);
    navigate('/', { replace: true });
  };

  // 로그인 핸들러
  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/login', { username, password });
      const newAccessToken = res.data.accessToken;
  
      console.log('Received Access Token:', newAccessToken);
  
      localStorage.setItem('accessToken', newAccessToken);
  
      const res2 = await axios.get(`/api/users/${username}`);
      const userData = res2.data;
  
      console.log('Received User Data:', userData);
  
      setLoggedInUser(userData);
      setAccessToken(newAccessToken);
      setIsLoggedIn(true); // 로그인 상태를 표시하는 상태 업데이트
      navigate('/');
    } catch (err) {
      // 로그인 오류 처리
      console.error('Login Error:', err);
      console.log('Error Response:', err.response); // 추가된 부분
  
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };



  return (
    <>
      <Body>
        <Mainheader>
          <NavContainer>
            <LogoContainer>
              <ButtonLogo onClick={() => onButtonClick('/')} type="button">
                <ImgLogo src="/images/logo.svg" />
              </ButtonLogo>
            </LogoContainer>
            <SearchContainer>
              <SearchContainerInput>
                <SearchContainerInput2>
                  <SearchContainerInputImg>
                    <SearchContainerInputImgValue src="/images/read.png" />
                  </SearchContainerInputImg>
                  <SearchInput type="text" autoComplete="off" placeholder="도시를 검색해보세요" />
                </SearchContainerInput2>
              </SearchContainerInput>
            </SearchContainer>
            <HeaderBigContainer>
              <HeaderSmallContainer>
                <LoginContainer
                  onMouseOver={(e) => {
                    LoginJoinCon(e, 'rgb(222, 226, 230)');
                  }}
                  onMouseOut={(e) => {
                    LoginJoinCon(e, 'white');
                  }}
                >
                  {isLoggedIn ? (
                    // 로그인 상태일 때 로그아웃 버튼 표시
                    <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
                  ) : (
                    // 로그아웃 상태일 때 로그인 버튼 표시
                    <LoginButton onClick={() => onButtonClick('/login')} type="button">
                      로그인
                    </LoginButton>
                  )}

                  {/* <LoginButton onClick={() => onButtonClick('/login')} type="button">로그인</LoginButton> */}
                  {/* <LoginButton onClick={handleLogout}>로그아웃</LoginButton> */}
                </LoginContainer>
                <LoginJoinContainer
                  onMouseOver={(e) => {
                    LoginJoinCon(e, '#F5FBFF');
                  }}
                  onMouseOut={(e) => {
                    LoginJoinCon(e, 'white');
                  }}
                >
                  <JoinButton onClick={() => onButtonClick('/join')} type="button">
                    회원가입
                  </JoinButton>
                </LoginJoinContainer>
              </HeaderSmallContainer>
            </HeaderBigContainer>
          </NavContainer>
          <BottomHeaderContainer>
            <BottomHeaderContainerInner>
              <MainpageContainer onMouseOver={HeaderColorOver} onMouseOut={HeaderColorOut}>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>항공권</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>해외숙소</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>국내숙소</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>투어·티켓</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>패키지</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>여행자보험</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>키즈</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>국내렌터카</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>항공권</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer>
                  <Href href="/">
                    <ItemContainer1Title>유심·이심</ItemContainer1Title>
                  </Href>
                </ItemContainer>
                <ItemContainer1>
                  <ItemContainer1Container type="button">
                    <ItemContainer1Title>더보기</ItemContainer1Title>
                    <More src="/images/more.png"></More>
                  </ItemContainer1Container>
                </ItemContainer1>
              </MainpageContainer>
            </BottomHeaderContainerInner>
          </BottomHeaderContainer>
        </Mainheader>
      </Body>
    </>
  );
};

export default HeaderPages;
