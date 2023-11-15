import { useNavigate } from "react-router-dom";
import { ImgLogo } from "../styles/header.styles";
import { CompleteButtonCheck, ErrMsg, Footeer, JoinName, JoinNameDown, JoinNameInput, JoinPassword, JoinPasswordInput, JoinPasswordcheck, JoinPasswordcheckDown, JoinPasswordcheckInput, JoinSectionContainer, JoinTitle1, JoinTitle2, Joinlayout, Jointitlecontainer, Sidebar, Sidebarh1, Sidebarspan } from "../styles/join.styles";
import { useState } from "react";
import axios from "axios";

const JoinPage = () => {
  //경로이동
  const navigate = useNavigate();
  //사용자가 입력한값 SET
  const [username, setUserName] = useState(' ');
  const [userId, setUserId] = useState(' ');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [phone, setPhone] = useState('');

  const [userNameErrMsg, setUserNameErrMsg] = useState('');
  const [userIdErrMsg, setUserIdErrMsg] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState('');
  const [passwordCheckErrMsg, setPasswordCheckErrMsg] = useState('');
  const [phoneErrMsg, setPhoneErrMsg] = useState('');

  //모달창이 열려있는지 닫혀있는지 만들어줄 state함수
  const [isOpen, setIsOpen] = useState(false);

  const userNameInputHandler =(e) => {
    setUserName(e.target.value);

    const userNameText = e.target.value;

    if(userNameText === ''){
      setUserNameErrMsg('이름은 필수 입력값입니다.');
    }else{
      setUserNameErrMsg('');
    } 
  }

  const userIdInputHandler =(e) => {
    setUserId(e.target.value);

    const userIdText = e.target.value;

    if(userIdText === ''){
      setUserIdErrMsg('아이디는 필수 입력값입니다.');
    }else{
      setUserIdErrMsg('');
    } 
  }


  const passwordInputHandler = (e)=>{
    const passwordText = e.target.value;
    setPassword(passwordText);

    if(passwordText === ''){
      setPasswordErrMsg('비밀번호는 필수 입력 값입니다.');
    }else if(passwordText.length < 6){
      setPasswordErrMsg('최소 6글자 이상으로 작성해주세요');
    }else{
      setPasswordErrMsg('');
    }

    if(passwordText !== passwordCheck){
      setPasswordCheckErrMsg('비밀번호가 일치하지 않습니다');
    }

  }

  const passwordCheckInputHandler = (e)=>{ 
    const passwordCheckText = e.target.value;
    setPasswordCheck(passwordCheckText);

    if(passwordCheckText ===''){
      setPasswordCheckErrMsg('비밀번호 확인은 필수 입력 값입니다.');

    }else if(passwordCheckText !== password){
      setPasswordCheckErrMsg('비밀번호가 일치하지 않습니다.');
    }else{
      setPasswordCheckErrMsg('');
    }

  }

  const phoneInputHandler = (e) => {
    const phoneText = e.target.value;
    setPhone(phoneText);

    if(phoneText === ``){
      setPhoneErrMsg('전화번호를 입력해주세요');
    }else{
      setPhoneErrMsg(``);
    }
  }
 
  const submitHandler = async (e)=>{
    // submit Event가 발생하면 실행되는함수,
    // e에는 발생한 이벤트 객체가 대입이 된다.
    // e.preventDefault() 함수는 이벤트의 기본 동작을 막는 함수이고,
    // submit 이벤트의 기본 동작은 데이터를 전송하는 것이므로, 전송을 막는 것
    e.preventDefault();

    let check = true;

    // 이름 input 태그 확인
    // state변수 userName 확인
    if(username === ''){
      setUserNameErrMsg('이름은 필수 입력 값입니다.');
      check = false;
    }  else{
      setUserIdErrMsg('');
    }

    // 아이디 input 태그 확인
    // state변수 userId 확인
    if(userId === ''){
      setUserIdErrMsg('이름은 필수 입력 값입니다.');
      check = false;
    }else{
      setUserIdErrMsg('');
    }

    // 비밀번호 입력 확인
    // state변수 password 확인
    if(password === ''){
      setPasswordErrMsg('비밀번호는 필수 입력 값입니다.');
      check = false;
    }else if(password.length < 6){
      setPasswordErrMsg('최소 6글자 이상으로 작성해주세요');
      check = false;
    }else{
      setPasswordErrMsg('');
    }

    // 비밀번호 확인 입력 확인
    // state변수 passwordCheck
    if(passwordCheck ===''){
      setPasswordCheckErrMsg('비밀번호 확인은 필수 입력 값입니다.');
      check = false;
    }else if(passwordCheck !== password){
      setPasswordCheckErrMsg('비밀번호가 일치하지 않습니다.');
      check = false;
    }else{
      setPasswordCheckErrMsg('');
    }

    // 전화번호 입력 확인
    // state변수 phone 확인
    if(phone === ''){
      setPhoneErrMsg('전화번호 입력은 필수 입력입니다.');
      check = false;
    }else{
      setPhoneErrMsg('');
    }

    if(check){
      console.log(e.target);
    

    try{
      let res = await axios.post('/api/users', {username, userId, password, phone});
      console.log(res)
      setIsOpen(true);
    }catch(err){
      console.log(err);
      if(err.response.data.errCode === 1){
        // alert('아이디가 너무 깁니다');
        alert('입력 항목에 너무 긴 항목이 있습니다');
      }else if(err.response.data.errCode === 2){
        setUserIdErrMsg('중복된 아이디 입니다');
      }else{
        alert('서버가 문제가 발생했습니다 잠시 뒤에 다시 시도해 주세요');
      }
    }

    // axios.post('/api/users', {
    //   email , 
    //   password,
    //   question,
    //   answer
    // }).then((res )=>{
    //   console.log(res);
    //   // 회원가입이 성공했다면 실행시킬 요소들
    //   // alert('회원가입 성공했습니다!');
    //   setIsOpen(true);
    // }).catch((err)=>{
    //   console.log(err);
    //   // 회원가입 실패했다했다면 실행시킬 코드
    //   if(err.response.data.errCode === 1){
    //     // alert('아이디가 너무 깁니다');
    //     setEmailErrMsg('아이디가 너무 깁니다');
    //   }else if(err.response.data.errCode === 2){
    //     setEmailErrMsg('중복된 아이디 입니다');
    //   }else{
    //     alert('서버가 문제가 발생했습니다 잠시 뒤에 다시 시도해 주세요');
    //   }
    // });

    console.log('ddddd');
  }
}



  

 // 모달창 버튼이 클릭되었을 때 
 const onHomeClick = ()=>{
  // 로그인 페이지로 이동,
  
  navigate('/', {replace: true});
}

const onModalClick = ()=>{
  // 로그인 페이지로 이동,
  
  navigate('/login', {replace: true});
}

  return( 
  <>
  <div>
    {/* 왼쪽 사이드바 */}
    <Sidebar>
        <Sidebarh1 onClick={onHomeClick}>
            <ImgLogo src="/images/logo.svg"></ImgLogo>
        </Sidebarh1>
        
    </Sidebar>
  {/* 오른쪽 사이드바 */}
    <JoinSectionContainer>
        <Joinlayout onSubmit={submitHandler} method="POST" action="/api/users">
            <Jointitlecontainer>
                <JoinTitle1>계정만들기</JoinTitle1>
                <JoinTitle2>로그인 계정을 생성해주세요</JoinTitle2>
            </Jointitlecontainer>
            <JoinName>이름</JoinName>
            <JoinNameInput onChange={userNameInputHandler} name="username" onChange={userNameInputHandler} id="joininput1" type="text" placeholder="홍길동" autoComplete="new-password" />
              {/* <ErrMsg>{userNameErrMsg}</ErrMsg> */}
          <JoinNameDown>{userNameErrMsg}</JoinNameDown>
          <JoinName>아아디</JoinName>
             <JoinNameInput onChange={userIdInputHandler} id="joininput1" type="text" placeholder="홍길동" autoComplete="new-password" />
           {/* <ErrMsg>{userIdErrMsg}</ErrMsg> */}
          <JoinNameDown>로그인할 아이디를 입력하세요</JoinNameDown>
          <JoinPassword>비밀번호</JoinPassword>
          <JoinPasswordInput onChange={passwordInputHandler} id="join-password-input" type="password" placeholder="비밀번호를 입력해 주세요"  />
           {/* <ErrMsg>{passwordErrMsg}</ErrMsg> */}
          <JoinPasswordcheck>비밀번호 확인</JoinPasswordcheck>
          <JoinPasswordcheckInput onChange={passwordCheckInputHandler}  id="joininput4" type="password" placeholder="입력하신 비밀번호를 확인해주세요"  />
           {/* <ErrMsg>{passwordCheckErrMsg}</ErrMsg> */}
          <JoinPasswordcheckDown id="pwcheckErr" >비밀번호가 일치하지 않습니다.</JoinPasswordcheckDown>
          <JoinName>전화번호</JoinName>
            <JoinNameInput id="joininput1" type="text" placeholder="01012345678" autoComplete="new-password" />
           {/* <ErrMsg>{phoneErrMsg}</ErrMsg> */}
          <JoinNameDown> - 를 제외하고 입력해수제요</JoinNameDown>
        </Joinlayout>
        <div isOpen={isOpen}>
        <CompleteButtonCheck onClick={onModalClick} >완료</CompleteButtonCheck>
        </div>
    </JoinSectionContainer>

    </div>
  </>
  );
};

export default JoinPage;
