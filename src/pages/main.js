const { Mainheader } = require('../styles/header.styles');
const {
  MainCom,
  ModCon,
  Mainsell,
  MainheaderCon,
  WelcomeTravel,
  WelcomeTravelhead,
  ListHead1,
  ListCon,
  ListIncon,
  ListWrap,
  JapanOsaka1,
  Osakaimg,
  OsakaTravel,
  OsakaContent,
  OsakaContentA,
  OsakaName,
  OsakaInfo,
  OsakaLink,
} = require('../styles/main.styles');

const MainPage = () => {
  return (
    <>
      <MainCom>
        <ModCon>
          <Mainsell></Mainsell>
          <Mainheader>
            <MainheaderCon>
              <WelcomeTravel>
                <WelcomeTravelhead>이번여행은 어디인가요</WelcomeTravelhead>
              </WelcomeTravel>
            </MainheaderCon>
            <MainheaderCon>
              <ListHead1>
                <ListCon>
                  <ListIncon>
                    <ListWrap>
                      <JapanOsaka1>
                        <Osakaimg src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Neon_signs_at_night%2C_24th_October_2014.JPG/310px-Neon_signs_at_night%2C_24th_October_2014.JPG" />
                        <OsakaTravel></OsakaTravel>
                        <OsakaContent>
                          <OsakaContentA>
                            <OsakaName>오사카</OsakaName>
                          </OsakaContentA>
                          <OsakaInfo>350여 개의 여행 상품</OsakaInfo>
                          <OsakaLink>둘러보기</OsakaLink>
                        </OsakaContent>
                      </JapanOsaka1>
                      <JapanOsaka1>
                        <Osakaimg src="https://d2ur7st6jjikze.cloudfront.net/offer_photos/7462/40659_large_1525259846.jpg?1525259846" />
                        <OsakaTravel></OsakaTravel>
                        <OsakaContent>
                          <OsakaContentA>
                            <OsakaName>도쿄</OsakaName>
                          </OsakaContentA>
                          <OsakaInfo>297여 개의 여행 상품</OsakaInfo>
                          <OsakaLink>둘러보기</OsakaLink>
                        </OsakaContent>
                      </JapanOsaka1>
                      <JapanOsaka1>
                        <Osakaimg src="https://lh3.googleusercontent.com/1QOz8nVGoJZgMGVjhL1A7Ag6xK8JN2O2a1gx16bRQxHx1E7v55ORqfmyUOaPlj7CgSo74Ct2Vv5bOTt7Orjue5FE-IU3EBB7LgYk7eJ1mxWZrQ3wWC6gy4EdU182-QLJK4eTi18-P9Q=w1280-h850-p-k" />
                      </JapanOsaka1>
                    </ListWrap>
                  </ListIncon>
                </ListCon>
              </ListHead1>
            </MainheaderCon>
          </Mainheader>
        </ModCon>
      </MainCom>
    </>
  );
};

export default MainPage;
