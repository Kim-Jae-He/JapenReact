import FooterPage from '../components/footer';
import HeaderPages from '../components/header';
import {
  BtnCheck,
  BtnExit,
  FormBtn,
  FormGroup,
  Headline,
  Heart,
  HeartCount,
  InputCon,
  InputWrap,
  LeftCon,
  LeftIcon,
  LeftProcon,
  Leftbar,
  Love,
  Memberbox,
  Membercon,
  Mycontent,
  ProImg,
  ProconItem,
  ProfileContainer,
  Proimg,
  ProimgImg,
  RemoveCon,
  RemoveText,
  RightFormBtn,
  RightFormBtnCon,
  RightTopForm,
  Rightbar,
  Text,
  Textms,
  Title,
  Traveler,
  Username,
  LoveA,
  LeftBar1,
  InputWrapDiv,
} from '../styles/mypage.styles';

const MyPageCom = () => {
  return (
    <>
      <Traveler>
        <ProfileContainer>
          <Headline>프로필 관리</Headline>
          <Leftbar>
            <LeftBar1>
              <LeftCon>
                <LeftProcon>
                  <ProImg src="images/user_profile.png" />
                </LeftProcon>
                <Username>김제희</Username>
                <Textms>
                  <LeftIcon src="images/sett.png"></LeftIcon>
                  <a>프로필 관리</a>
                </Textms>
              </LeftCon>
              <LeftProcon>
                <ProconItem>
                  <Heart>내가 누른 좋아요</Heart>
                  <HeartCount>
                    <LoveA>
                      <Love src="images/loveicon.png" width={16} />
                      0개
                    </LoveA>
                  </HeartCount>
                </ProconItem>
              </LeftProcon>
            </LeftBar1>
          </Leftbar>
          <Rightbar>
            <Memberbox>
              <Mycontent>
                <Proimg>
                  <ProimgImg src="/images/user_profile.png" />
                  <RightTopForm></RightTopForm>
                  <Text>김제희</Text>
                </Proimg>
                <Membercon>
                  <form>
                  <FormGroup>
                      <Title>아아디</Title>
                        <InputWrapDiv>입력받을 아이디칸</InputWrapDiv>
                    </FormGroup>
                    <FormGroup>
                      <Title>이름</Title>
                      <InputCon>
                        <InputWrap type="text"></InputWrap>
                      </InputCon>
                    </FormGroup>
                    <FormGroup>
                      <Title>전화번호</Title>
                      <InputCon>
                        <InputWrap type="text"></InputWrap>
                      </InputCon>
                    </FormGroup>
                    <FormGroup>
                      <Title>비밀번호</Title>
                      <InputCon>
                        <InputWrap type="password"></InputWrap>
                      </InputCon>
                    </FormGroup>
                    <FormGroup>
                      <Title>비밀번호확인</Title>
                      <InputCon>
                        <InputWrap type="password"></InputWrap>
                      </InputCon>
                    </FormGroup>
                    <RightFormBtn>
                      <RightFormBtnCon>
                        <FormBtn>
                          <BtnExit>취소하기</BtnExit>
                        </FormBtn>
                        <FormBtn>
                          <BtnCheck>저장하기</BtnCheck>
                        </FormBtn>
                      </RightFormBtnCon>
                    </RightFormBtn>
                  </form>
                </Membercon>
              </Mycontent>
            </Memberbox>
          </Rightbar>
          <RemoveCon>
          <RemoveText>계정 삭제하기</RemoveText>
        </RemoveCon>
        </ProfileContainer>
      </Traveler>
    </>
  );
};

export default MyPageCom;
