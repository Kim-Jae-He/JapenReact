//import { useNavigate } from 'react-router-dom';
import NoticePage from './notice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Margin } from '@mui/icons-material';
import { useState } from 'react';

const { Mainheader } = require('../styles/header.styles');
const {
  MainCom,
  TestCss,
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
  ListWrapspan,
  NextCarousel,
  NextnextImg,
  SecondContainer,
  SecondEvents,
  SlideContainer,
  SwiperSlide,
  SlideBanner,
  SecondNone,
  SlideBannerA,
  SlideBannerImg,
} = require('../styles/main.styles');

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: false,
    arrow: true,
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const totalSlides = 2;  // 총 슬라이드 개수
  const slideWidth = 265;  // 각 슬라이드의 너비

  // 현재 슬라이드가 첫 번째 슬라이드일 때, 이전 버튼을 클릭하면 마지막 슬라이드로 이동
  const handlePrevInfinite = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // 현재 슬라이드가 마지막 슬라이드일 때, 다음 버튼을 클릭하면 첫 번째 슬라이드로 이동
  const handleNextInfinite = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

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
                    <ListWrap style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}>
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
                        <OsakaTravel></OsakaTravel>
                        <OsakaContent>
                          <OsakaContentA>
                            <OsakaName>후쿠오카</OsakaName>
                          </OsakaContentA>
                          <OsakaInfo>200여 개의 여행 상품</OsakaInfo>
                          <OsakaLink>둘러보기</OsakaLink>
                        </OsakaContent>
                      </JapanOsaka1>
                      <JapanOsaka1>
                        <Osakaimg src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/20/00/a2000730/img/basic/a2000730_main.jpg?20220805104001&q=80" />
                        <OsakaTravel></OsakaTravel>
                        <OsakaContent>
                          <OsakaContentA>
                            <OsakaName>교토</OsakaName>
                          </OsakaContentA>
                          <OsakaInfo>100여 개의 여행 상품</OsakaInfo>
                          <OsakaLink>둘러보기</OsakaLink>
                        </OsakaContent>
                      </JapanOsaka1>
                      <JapanOsaka1>
                        <Osakaimg src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/k1ox6xmsuddpmxfgegjg/%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80%EC%B8%84%EB%9D%BC%EC%8B%9C%EB%A7%88%EB%B2%84%EC%8A%A4%EC%9D%BC%EC%9D%BC%ED%88%AC%EC%96%B4(%EB%82%98%ED%95%98%EB%98%90%EB%8A%94%EC%B0%A8%ED%83%84%EC%B6%9C%EB%B0%9C)-%ED%81%B4%EB%A3%A9Klook%ED%95%9C%EA%B5%AD.jpg" />
                        <OsakaTravel></OsakaTravel>
                        <OsakaContent>
                          <OsakaContentA>
                            <OsakaName>오키나와</OsakaName>
                          </OsakaContentA>
                          <OsakaInfo>50여 개의 여행 상품</OsakaInfo>
                          <OsakaLink>둘러보기</OsakaLink>
                        </OsakaContent>
                      </JapanOsaka1>
                      <JapanOsaka1></JapanOsaka1>
                    </ListWrap>
                    <ListWrapspan></ListWrapspan>
                  </ListIncon>
                  {/* 오른쪽버튼 */}

                  <NextCarousel
                    type="button"
                    tabIndex="0"
                    role="button"
                    aria-disabled="false"
                    onClick={handlePrevInfinite}
                  >
                    
                    <NextnextImg src="/images/next.png"></NextnextImg>
                  </NextCarousel>
                </ListCon>
              </ListHead1>
            </MainheaderCon>
          </Mainheader>
          {/* 메인2번째 슬라이드 */}
          <Slider style={{ width: '1060px', margin: '0 auto 44px' }} {...settings}>
            <SlideBannerA>
              <SlideBannerImg src="https://d2ur7st6jjikze.cloudfront.net/cms/4078_original_1692161584.jpg?1692161584" />
            </SlideBannerA>
            <SlideBannerA>
              <SlideBannerImg src="https://d2ur7st6jjikze.cloudfront.net/cms/3632_original_1692183383.jpg?1692183383" />
            </SlideBannerA>
            <SlideBannerA>
              <SlideBannerImg src="https://d2ur7st6jjikze.cloudfront.net/cms/4078_original_1692668413.jpg?1692668413" />
            </SlideBannerA>
            <SlideBannerA>
              <SlideBannerImg src="https://d2ur7st6jjikze.cloudfront.net/cms/3632_original_1692183383.jpg?1692183383" />
            </SlideBannerA>
            <SlideBannerA>
              <SlideBannerImg src="https://d2ur7st6jjikze.cloudfront.net/cms/2442_original_1690794051.jpg?1690794051" />
            </SlideBannerA>
            <SlideBannerA>
              <SlideBannerImg src="https://d2ur7st6jjikze.cloudfront.net/cms/4078_original_1692668413.jpg?1692668413" />
            </SlideBannerA>
            <SlideBannerA>
              <SlideBannerImg src="https://d2ur7st6jjikze.cloudfront.net/cms/1579_original_1692577640.jpg?1692577640" />
            </SlideBannerA>
            <SlideBannerA>
              <SlideBannerImg src="/images/tokyotower.jpg" />
            </SlideBannerA>
          </Slider>

          {/* 게시판 */}
          <NoticePage></NoticePage>
          {/* //게시판 */}
        </ModCon>
      </MainCom>
    </>
  );
};

export default MainPage;
