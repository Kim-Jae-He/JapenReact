import { JoinName, JoinNameInput, JoinSectionContainer, JoinTitle1, JoinTitle2, Joinlayout, Jointitlecontainer, Sidebar, Sidebarh1, Sidebarspan } from "../styles/join.styles";

const JoinPage = () => {
  return( 
  <>
  <div>
    {/* 왼쪽 사이드바 */}
    <Sidebar>
        <Sidebarh1>
            <img src="/images/logo.svg" width={147} height={34} />
            <Sidebarspan>계정 만들기</Sidebarspan>
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
        </Joinlayout>
    </JoinSectionContainer>


    </div>
  </>
  );
};

export default JoinPage;
