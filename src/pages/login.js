import { LoginButton, LoginContainer } from '../styles/header.styles';
import {
  ALogo,
  ButtonColor,
  Buttoncss,
  Checkid,
  Checkpw,
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

const LoginPage = () => {
  return (
    <>
      <form>
        <HeaderCon>
          <HeaderContainer>
            <HeaderLogo></HeaderLogo>
            <ALogo>
              <LogoImage src="/images/logo.svg"></LogoImage>
            </ALogo>
            <a href="../pages/join.js">
              <LogoSpan />
            </a>
            <HeaderButton>
              <ButtonColor>
                <Buttoncss>
                  <SpanButton>회원가입</SpanButton>
                </Buttoncss>
              </ButtonColor>
            </HeaderButton>
          </HeaderContainer>
        </HeaderCon>
        <LoginContainer>
          <LoginContainerbox>
            <FormCon>
              <Checkid>아이디</Checkid>
              <Inputid>
                <Inputid1 id="idCheck" typeof="text" placeholder="ID" />
              </Inputid>
              <Checkpw>비밀번호 </Checkpw>
              <Inputpw>
                <Inputpw1 id="pwcheck" typeof="password" placeholder="비밀번호르 입력해주세요" />
              </Inputpw>
              <LoginButton>
                <Loginbutton1>로그인</Loginbutton1>
              </LoginButton>
            </FormCon>
          </LoginContainerbox>
        </LoginContainer>
      </form>
    </>
  );
};

export default LoginPage;
