import {
  Body,
  BottomHeaderContainer,
  BottomHeaderContainerInner,
  ButtonLogo,
  HeaderBigContainer,
  HeaderSmallContainer,
  ImgLogo,
  JoinButton,
  LoginButton,
  LoginContainer,
  LoginJoinContainer,
  LogoContainer,
  Mainheader,
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
              <ButtonLogo type='button'>
                <ImgLogo src='/images/logo.svg' />
              </ButtonLogo>
            </LogoContainer>
            <SearchContainer>
              <SearchContainerInput>
                <SearchContainerInput2>
                  <SearchContainerInputImg>
                    <SearchContainerInputImgValue src='/images/read.png' />
                  </SearchContainerInputImg>
                  <SearchInput type='text' autoComplete='off' placeholder='도시를 검색해보세요' />
                </SearchContainerInput2>
              </SearchContainerInput>
            </SearchContainer>
            <HeaderBigContainer>
            <HeaderSmallContainer>
              <LoginContainer>
                <LoginButton type='button'>로그인</LoginButton>
              </LoginContainer>
              <LoginJoinContainer>
                <JoinButton type='button'>회원가입</JoinButton>
              </LoginJoinContainer>
            </HeaderSmallContainer>
            </HeaderBigContainer>
          </NavContainer>
          <BottomHeaderContainer>
            <BottomHeaderContainerInner>
              
            </BottomHeaderContainerInner>
          </BottomHeaderContainer>
        </Mainheader>
      </Body>
    </>
  );
};

export default HeaderPages;
