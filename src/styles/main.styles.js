import styled from '@emotion/styled';

export const Div = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', '맑은 고딕', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  color: #343a40;
  letter-spacing: -0.2px;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  font: inherit;
  vertical-align: baseline;
  border: 0;
  font-family: 'SF Pro KR', 'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont,
    'Noto Sans KR', 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  overflow-anchor: none;

  &:a {
    text-decoration: none;
    outline: none;
    color: inherit;
    cursor: pointer;
  }
`;

export const MainCom = styled.div`
  overflow: hidden;
`;

export const ModCon = styled.div`
  position: relative;
  transform: translateY(-96px);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`;

export const Mainsell = styled.div`
  background-color: #f5f6f7;
  display: flex;
  height: 96px;
  justify-content: center;
  overflow: hidden;
  visibility: hidden;
  margin-bottom: 48px;
`;

export const Mainheader = styled.div`
  background-color: #fff;
  margin-bottom: 64px;
  text-align: center;
  width: 100%;
`;

export const MainheaderCon = styled.div`
  margin-bottom: 24px;
  position: relative;
  width: 100%;
`;

export const WelcomeTravel = styled.div`
  margin-bottom: 30px;
  margin-top: 48px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  width: 1060px;
`;

export const WelcomeTravelhead = styled.h2`
  color: black;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.4px;
  line-height: 44px;
  text-align: left;
  margin: 0px;
`;

export const ListHead1 = styled.div`
  margin: 0 auto;
  position: relative;
  width: 1060px;
`;

export const ListCon = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export const ListIncon = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

export const ListWrap = styled.div`
  width: 2160px;
  opacity: 0.99;
  padding-bottom: 20px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  height: 100%;
  z-index: 1;
  display: flex;
  list-style: none;
  transition-property: transform;
`;

export const ListWrapspan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
  color: inherit;
`;
export const JapanOsaka1 = styled.div`
  border-radius: 8px;
  box-shadow: 0 8px 12px 0 rgba(33, 37, 41, 0.15);
  cursor: pointer;
  display: inline-block;
  height: 333px;
  overflow: hidden;
  position: relative;
  width: 250px !important;
  z-index: 0;
  margin-right: 20px;
  width: 270px;
`;

export const Osakaimg = styled.img`
  height: 100%;
  width: auto;
  left: 0;
  object-fit: cover;
  position: absolute;
  border-width: 0;
  vertical-align: middle;
`;

export const Osaka = styled.img`
  transform: scale(1);
  transition-duration: 1s;
  transition-timing-function: ease-out;
  height: 100%;
  width: auto;
  left: 0;
  object-fit: cover;
  position: absolute;
`;

export const OsakaTravel = styled.div`
  background-image: linear-gradient(142deg, rgba(0, 0, 0, 0.7), hsla(0, 0%, 100%, 0) 65%);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const OsakaContent = styled.div`
  height: 100%;
  left: 0;
  padding: 32px 24px;
  position: absolute;
  text-align: left;
  top: 0;
  width: 100%;
`;

export const OsakaContentA = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;

export const OsakaName = styled.span`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.29;
  text-align: left;
  text-shadow: 0 1px 8px rgba(33, 37, 41, 0.6);
  vertical-align: middle;
  color: white;
`;

export const OsakaInfo = styled.span`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #fff;
  display: -webkit-box;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.3px;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 8px rgba(33, 37, 41, 0.6);
`;

export const OsakaLink = styled.a`
  text-decoration: none;
  border: none;
  bottom: 95px;
  box-shadow: 0 0 0 1px rgba(33, 37, 41, 0.08);
  left: 24px;
  position: absolute;
  padding-top: 1px;
  box-sizing: border-box;
  display: inline-block;
  line-height: 3;
  background-color: #fff;
  color: #495056;
  font-size: 14px;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  text-align: center;
`;

export const Button = styled.button`
  outline: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  line-height: inherit;
  text-transform: none;
  padding-block: 1px;
  padding-inline: 6px;
`;

export const BackCarousel = styled.button`
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 6px 0 rgba(0, 0, 0, 0.05),
    0 4px 12px 0 rgba(0, 0, 0, 0.05);
  height: 40px;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s;
  width: 40px;
  z-index: 10;
  /* cursor: pointer; */
  appearance: none;
  image: hidden;
`;

export const Img = styled.img`
  border-width: 0;
  border: 0;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
  text-align: center;
`;

export const NextnextImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const NextCarousel = styled.button`
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 6px 0 rgba(0, 0, 0, 0.05),
    0 4px 12px 0 rgba(0, 0, 0, 0.05);
  height: 40px;
  position: absolute;
  text-align: center;
  transform: translateY(-50%);
  transition: 0.2s;
  width: 40px;
  z-index: 10;
  top: calc(50%);
  right: -10px;
  cursor: pointer;
`;

export const SecondContainer = styled.div`
  width: 1060px;
  margin: 0px auto 44px;
  overflow: hidden;
`;

export const SecondEvents = styled.div`
  height: calc(320px);
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  position: relative;
  z-index: 1;
`;

export const SlideContainer = styled.div`
  overflow: inherit;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const SwiperSlide = styled.div`
  width: 100%;
  height: 280px;
  transform: translateZ(0);
  flex: 0 0 100%;
  position: relative;
`;

export const SlideBanner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const SecondNone = styled.div`
  width: 100%;
  height: 100%;
`;

export const SlideBannerA = styled.a`
  width: 1060px;
  margin: 0 auto 44px;
`;

export const IMGIMG = styled.img`
  width: 1060px;
  margin: 0 auto 44px;
`;

export const SlideBannerImg = styled.img`
  background: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: inset 0 0 0 1px rgba(black, 0.05);
  border-radius: 4px;
`;

export const NavBut = styled.nav`
  position: absolute;
  top: calc(50% - 14px);
  transform: translateY(-50%);
  border: none;
  opacity: 0.5;
  padding: 0px;
  z-index: 1;
  transition: opacity 200ms ease 0s;
  left: 8px;
`;

export const NavButImg = styled.img`
  display: inline-block;
  border: 0px;
`;

export const TestCss = styled.div`
  bottom: -25px;
  width: 100%;
  list-style: none;
  text-align: end;
  position: absolute;
  right: 15px;
  padding: 0;

  li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    /* margin: 1px; */
    padding: 0;
    cursor: pointer;

    button {
      font-size: 0;
      line-height: 0;
      display: block;
      width: 20px;
      height: 20px;
      padding: 5px;
      cursor: pointer;
      color: transparent;
      border: 0;
      outline: 0;
      background: 0 0;

      &:before {
        font-size: 2.7rem;
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        content: '•';
        text-align: center;
        opacity: .75;
        color: #6D6968;
      }
    }

    &.slick-active {
      button:before {
        opacity: .75;
        color: #ffffff;
      }
    }
  }
`;