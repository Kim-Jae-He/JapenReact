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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeaderPages = () => {
  const navigate = useNavigate();

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

  // 홈페이지,로그인,회원가입 클릭시 경로이동
  const onButtonClick = (path) => {
    navigate(path, { replace: true });
  };

  //로그인이 확인되면 로그아웃으로 글씨 변경
  const LoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleButtonClick = () => {
      // 로그인 상태를 토글합니다.
      setIsLoggedIn(!isLoggedIn);

      navigate('/login');
    };
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
                  <LoginButton onClick={() => onButtonClick('/login')} type="button">
                    {isLoggedIn ? '로그아웃' : '로그인'}
                  </LoginButton>
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
