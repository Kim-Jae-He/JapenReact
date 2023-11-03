import { useNavigate } from "react-router-dom";
import { ImgLogo } from "../styles/header.styles";
import { CompleteButtonCheck, Footeer, JoinName, JoinNameDown, JoinNameInput, JoinPassword, JoinPasswordInput, JoinPasswordcheck, JoinPasswordcheckDown, JoinPasswordcheckInput, JoinSectionContainer, JoinTitle1, JoinTitle2, Joinlayout, Jointitlecontainer, Sidebar, Sidebarh1, Sidebarspan } from "../styles/join.styles";

const JoinPage = () => {
  const navigate = useNavigate();



 // 모달창 버튼이 클릭되었을 때 
 const onHomeClick = ()=>{
  // 로그인 페이지로 이동,
  
  navigate('/', {replace: true});
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
        <Joinlayout>
            <Jointitlecontainer>
                <JoinTitle1>계정만들기</JoinTitle1>
                <JoinTitle2>로그인 계정을 생성해주세요</JoinTitle2>
            </Jointitlecontainer>
            <JoinName>이름</JoinName>
            <JoinNameInput id="joininput1" type="text" placeholder="홍길동" autoComplete="new-password" />
          <JoinNameDown>이름을 입력하세요</JoinNameDown>
          <JoinName>아아디</JoinName>
            <JoinNameInput id="joininput1" type="text" placeholder="홍길동" autoComplete="new-password" />
          <JoinNameDown>로그인할 아이디를 입력하세요</JoinNameDown>
          <JoinPassword>비밀번호</JoinPassword>
          <JoinPasswordInput id="join-password-input" type="password" placeholder="비밀번호를 입력해 주세요"  />
          <JoinPasswordcheck>비밀번호 확인</JoinPasswordcheck>
          <JoinPasswordcheckInput id="joininput4" type="password" placeholder="입력하신 비밀번호를 확인해주세요"  />
          <JoinPasswordcheckDown id="pwcheckErr" >비밀번호가 일치하지 않습니다.</JoinPasswordcheckDown>
        </Joinlayout>
        <CompleteButtonCheck>완료</CompleteButtonCheck>
    </JoinSectionContainer>

    </div>
  </>
  );
};

export default JoinPage;
