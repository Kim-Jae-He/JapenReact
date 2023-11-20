import styled from '@emotion/styled';

export const HeaderCon = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 72px;
  background: white;
  z-index: 9;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 16px 24px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  max-width: 1016px;
  margin: 16px auto;
`;

export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
  margin-left: 0px;
`;

export const ALogo = styled.a`
  color: #51abf3;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
`;

export const LogoImage = styled.img`
  width: 128px;
  height: 100%;
  margin-right: 10px;
  overflow: clip;
  overflow-clip-margin: content-box;
`;

export const LogoSpan = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 15px;
  padding-top: 3px;
  line-height: 138%;
  color: gray;
`;

export const HeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  text-align: center;
`;

export const ButtonColor = styled.button`
  margin: 8px;
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  overflow: hidden;
  cursor: pointer;
  background-color: rgb(43, 150, 237);
  color: rgb(255, 255, 255);
  height: 40px;
  padding: 0px 12px;
  width: auto;
  border-radius: 99px;
  box-shadow: none;
`;

export const Buttoncss = styled.div`
  padding: 0px 4px;
`;

export const SpanButton = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 124%;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
`;

export const FormCon = styled.form`
  display: block;
  margin-top: 0em;
`;

export const LoginContainer = styled.div`
  padding: 200px 0px 0px;
`;

export const LoginContainerboxMedia = styled.div`
  @media (max-width: 767px) {
    border: 0px;
    padding: 32px 28px 56px;
  }
`;

export const LoginContainerbox = styled.div`
  max-width: 340px;
  margin: 0px auto;
  border-radius: 4px;
`;

export const Checkid = styled.div`
  padding: 24px 0px 8px;
  font-size: 14px;
  color: rgb(52, 58, 64);
`;

export const Inputid1 = styled.input`
  width: unset;
  margin-bottom: 0px;
  border-radius: 2px;
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  height: 48px;
  padding: 0px 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.38em;
  color: rgb(20, 23, 25);
`;

export const Inputid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Checkpw = styled.div`
  padding: 24px 0px 8px;
  font-size: 14px;
  color: rgb(52, 58, 64);
`;

export const Inputpw = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Inputpw1 = styled.input`
  width: unset;
  margin-bottom: 0px;
  border-radius: 2px;
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  height: 48px;
  padding: 0px 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.38em;
  color: rgb(20, 23, 25);
`;

export const Loginbutton1 = styled.button`
  cursor: pointer;
  background-color: rgb(43, 150, 230, 0.8)  ;
  color: white;
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  box-shadow: none;
  margin-top: 30px;
`;

export const ErrMsg = styled.p`
  color: red;
  font-size: 12px;
  padding-left: 10px;
  `;