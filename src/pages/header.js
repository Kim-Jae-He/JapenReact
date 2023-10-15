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

const HeaderPages = () => {
  return (
    <>
      <Body>
        <Mainheader>
          <NavContainer>
            <LogoContainer>
              <ButtonLogo type="button">
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
                <LoginContainer>
                  <LoginButton type="button">로그인</LoginButton>
                </LoginContainer>
                <LoginJoinContainer>
                  <JoinButton type="button">회원가입</JoinButton>
                </LoginJoinContainer>
              </HeaderSmallContainer>
            </HeaderBigContainer>
          </NavContainer>
          <BottomHeaderContainer>
            <BottomHeaderContainerInner>
              <MainpageContainer>
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
