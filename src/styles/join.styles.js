import styled from '@emotion/styled';

export const Sidebar = styled.aside`
  position: fixed;
  top: 0px;
  bottom: 96px;
  left: 0px;
  padding: 40px 38px 0px 32px;
`;

export const Sidebarh1 = styled.h1`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 7px;
  margin-bottom: 40px;
  cursor: pointer;
  margin: 0px;
`;

export const Sidebarspan = styled.span`
  font-size: 18px;
  line-height: 138%;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: gray;
  padding-left: 25px;
`;

export const Applayout = styled.div`
  width: 100%;
  height: 100vh;
  color: rgb(20, 23, 25);
`;

export const Leftaside = styled.aside`
  position: fixed;
  top: 100px;
  bottom: 96px;
  left: 10px;
  padding: 40px 38px 0px 32px;
`;

export const JoinSectionContainer = styled.form`
  min-height: 100%;
  margin-left: 320px;
  padding: 0px 20px 210px;
  text-align: center;
`;

export const Joinlayout = styled.form`
  width: 880px;
  margin: 0px auto;
  text-align: left;
`;

export const Jointitlecontainer = styled.div`
  padding: 72px 0px 53px;
  border-bottom: 1px solid gray;
  margin-bottom: 48px;
`;

export const JoinTitle1 = styled.h3`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 8px;
  line-height: 130%;
`;

export const JoinTitle2 = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 138%;
  letter-spacing: -0.01em;
  white-space: pre-line;
`;

export const JoinName = styled.div`
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 138%;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const JoinNameInput = styled.input`
  width: 420px;
  margin-bottom: 0px;
  border-radius: 4px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  height: 48px;
  padding: 0px 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.38em;
  color: rgb(20, 23, 25);
`;

export const JoinNameDown = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  color: red;
  font-weight: 400;
  font-size: 13px;
  line-height: 138%;
`;

export const JoinId = styled.div`
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 138%;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const JoinIdInput = styled.input`
  width: 420px;
  margin-bottom: 0px;
  border-radius: 4px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  height: 48px;
  padding: 0px 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.38em;
  color: rgb(20, 23, 25);
`;

export const JoinIdDown = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  color: grey;
  font-size: 13px;
  line-height: 138%;
`;

export const JoinPassword = styled.div`
  margin-bottom: 8px;
  margin-top: 16px;
  font-size: 15px;
  line-height: 138%;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const JoinPasswordInput = styled.input`
  width: 420px;
  margin-bottom: 18px;
  border-radius: 4px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  height: 48px;
  padding: 0px 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.38em;
  color: rgb(20, 23, 25);
`;

export const JoinPasswordDown = styled.div`
  display: none;
  margin-top: 8px;
  margin-bottom: 16px;
  color: grey;
  font-size: 13px;
  line-height: 138%;
`;

export const JoinPasswordcheckDown = styled.div`
  display: none;
  margin-top: 8px;
  margin-bottom: 16px;
  color: grey;
  font-size: 13px;
  line-height: 138%;
`;

export const JoinPasswordcheck = styled.div`
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 138%;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const JoinPasswordcheckInput = styled.input`
  width: 420px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  height: 48px;
  padding: 0px 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.38em;
  color: rgb(20, 23, 25);
`;

export const CompleteButton = styled.button`
  padding: 20px 44px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px -2px 0px;
`;

export const CompleteButtonCheck = styled.button`
  height: 56px;
  line-height: 56px;
  padding: 0px 20px;
  border-radius: 28px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 8px;
  background-color: #2b96ed;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: none;
`;

export const Footeer = styled.footer`
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  padding: 20px 44px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px -2px 0px;
  background: white;
  text-align: right;
`;

export const ErrMsg = styled.p`
  color: red;
  font-size: var(--font-xs);
  padding-left: 10px;
`;


const Modal = styled.div`
  width: 450px;
  background-color: white;
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 30px;
`;
