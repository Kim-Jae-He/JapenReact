import styled from '@emotion/styled';

/* ::before,
::after {
  font-family: 'SF Pro KR', 'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont,
    'Noto Sans KR', 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
} */

// a {
//   text-decoration: none;
//   outline: none;
//   color: inherit;
//   text-decoration: none;
//   cursor: pointer;
//   touch-action: manipulation;
//   background-color: transparent;
// }
export const Traveler = styled.main`
  *,
  ::before,
  ::after {
    font-family: 'SF Pro KR', 'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont,
      'Noto Sans KR', 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    touch-action: manipulation;
    background-color: transparent;
  }

  background-color: #fff;
  font-size: 0;
`;

export const ProfileContainer = styled.div`
  margin: 0 auto;
  padding: 50px 0 102px;
  position: relative;
  width: 1060px;
`;

export const Headline = styled.div`
  color: #495056;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 17px;
`;

export const Leftbar = styled.div`
  color: #343a40;
  display: inline-block;
  float: left;
  margin-right: 18px;
  width: 250px;
  letter-spacing: -0.2px;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  font: inherit;
  vertical-align: baseline;
  border: 0;
`;

export const Rightbar = styled.div`
  display: inline-block;
  width: 790px;
`;

export const LeftCon = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px #dee2e6;
  margin-bottom: 8px;
  height: 250px;
  padding: 42px 10px 30px;
  text-align: center;
`;

export const ProImg = styled.img`
  border: 2px solid #e9ecef;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
`;

export const Username = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 11px 0 23px;
`;

export const Textms = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const LeftIcon = styled.div`
  margin-bottom: 2px;
  margin-right: 2px;
  display: inline-block;
  border-width: 0;
  vertical-align: middle;
  border: 0;
  height: 11px;
`;

export const LeftBar1 = styled.div`
  color: #343a40;
  letter-spacing: -0.2px;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  font: inherit;
  vertical-align: baseline;
  border: 0;
`;

export const LeftProcon = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px #dee2e6;
  margin-bottom: 8px;
  padding: 13px 20px;
`;

export const ProconItem = styled.div`
  display: block;
  font-weight: 500;
  margin: 7px 0;
`;

export const Heart = styled.div`
  font-size: 11px;
  display: inline-block;
  text-align: left;
  width: 40%;
`;

export const HeartCount = styled.div`
  font-size: 14px;
  color: #2b96ed;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0;
  text-align: right;
  width: 60%;
`;

export const LoveA = styled.a`
  outline: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  touch-action: manipulation;
  background-color: transparent;
`;

export const Love = styled.img`
  vertical-align: text-bottom;
  border-width: 0;
  border: 0;
  overflow-clip-margin: content-box;
  overflow: clip;
  text-align: center;
`;

export const Memberbox = styled.main`
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px #dee2e6;
  margin-bottom: 8px;
  color: #495056;
  font-weight: 500;
  position: relative;
`;

export const Mycontent = styled.div`
  padding-bottom: 20px;
  font-size: 14px;
  padding: 50px 40px 40px;
  position: relative;
`;

export const Proimg = styled.div`
  margin-bottom: 50px;
  position: relative;
  text-align: center;
`;

export const ProimgImg = styled.img`
  border-radius: 49px;
`;

export const RightTopForm = styled.form`
  display: inline-block;
  width: 98px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
  padding-right: 88px;
`;

export const Membercon = styled.div`
  margin-bottom: 10px;
`;

export const FormGroup = styled.div`
  min-height: 45px;
  margin-bottom: 10px;
  line-height: 27px;
  position: relative;
`;

export const Title = styled.div`
  line-height: 45px;
  font-weight: 600;
  position: absolute;
  width: 122px;
`;

export const InputCon = styled.div`
  line-height: 45px;
  width: 100%;
  display: inline-block;
  padding-left: 122px;
`;

export const InputWrap = styled.input`
  background-color: #fff;
  font-weight: 500;
  height: 40px;
  margin-top: 0;
  padding: 0 20px;
  border: solid 1px #ced4da;
  border-radius: 4px;
  font-size: 14px;
  color: #343a40;
  box-shadow: none;
  display: block;
  width: 75%;
  line-height: 1.5;
  background-image: none;
`;

export const InputWrapDiv = styled.div`
  background-color: #fff;
  font-weight: 500;
  height: 40px;
  margin-top: 0;
  padding: 0 20px;
  border-radius: 4px;
  font-size: 14px;
  color: #343a40;
  box-shadow: none;
  display: block;
  width: 75%;
  line-height: 1.5;
  background-image: none;
  line-height: 45px;
  width: 100%;
  display: inline-block;
  padding-left: 122px;
`;

export const RightFormBtn = styled.div`
  border-top: 1px solid #black;
  display: block;
  padding-top: 24px;
  margin-top: 24px;
  text-align: center;
`;

export const RightFormBtnCon = styled.div`
  margin: 0 -4px;
  overflow: visible;
  padding-bottom: 20px;
`;

export const FormBtn = styled.div`
  display: inline-block;
  float: left;
  padding: 0 10px;
  width: 50%;
  color: #343a40;
  letter-spacing: -0.2px;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  font: inherit;
  vertical-align: baseline;
  border: 0;
`;

export const BtnExit = styled.button`
  background-color: #e9ecef;
  color: #495056 !important;
  width: 100%;
  font-size: 14px;
  height: 40px;
  line-height: 38px;
  transition: all 0.1s ease-out;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  display: block;
  font-weight: 700;
  padding: 0;
  text-align: center;
`;

export const BtnCheck = styled.button`
  background-color: #51abf3;
  color: #fff !important;
  width: 100%;
  font-size: 14px;
  height: 40px;
  line-height: 38px;
  transition: all 0.1s ease-out;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  display: block;
  font-weight: 700;
  padding: 4px;
  text-align: center;
`;

export const RemoveCon = styled.div`
  margin-top: 25px;
  text-align: center;
`;

export const RemoveText = styled.div`
  font-size: 12px;
  color: #848c94;
  cursor: pointer;
  display: inline-block;
  text-decoration: underline;
`;

export const DeleteCon = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  transition: all 0.3s ease 0s;
  width: 500px;
  border-radius: 4px;
  background-color: white;
  z-index: var(--z-dialog);
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -50%);
`;
