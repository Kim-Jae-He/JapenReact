import {
  Bot,
  Foot,
  InfoPlan,
  TeamInfo2,
  Teaminfo,
  Topfoot,
  TopfootIn,
  Ul,
} from '../styles/footer.styles';
import { Body } from '../styles/header.styles';

const FooterPage = () => {
  return (
    <>
      <Body>
        <Bot>
          <Foot>
            <Topfoot>
              <TopfootIn>
                <Teaminfo>5팀프로젝트 안내</Teaminfo>
                <TeamInfo2>
                  <InfoPlan>고객센터 010-4073-9805</InfoPlan>
                  <InfoPlan>사업장위치</InfoPlan>
                  <InfoPlan>서울특별시 강남구 역삼동 736-7</InfoPlan>
                  <InfoPlan>사업장전화번호</InfoPlan>
                  <InfoPlan>02-538-0021</InfoPlan>
                </TeamInfo2>
              </TopfootIn>
            </Topfoot>
          </Foot>
        </Bot>
      </Body>
    </>
  );
};

export default FooterPage