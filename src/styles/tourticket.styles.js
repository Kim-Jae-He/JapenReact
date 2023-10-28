@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}
.row {
    display: flex;
}
.inner {
    width: 1060px;
    margin: 0 auto;
}
.line {
  text-decoration:line-through;
  color: #848c94;
  font-size: 12px;
  margin-right: 4px;
}
body {
    width: 100%;
    background-color: white;
    color: #343A40;
    font-family: 'Work Sans', sans-serif;
    position: relative;
}
h1 {
  color: #343A40;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
}
h2 {
  color: #343A40;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  opacity: .6;
}
/* 헤더 */
header {
  width: 100%;
  height: 343px;
  background: url('/JapenTravel/images/오사카성.png') no-repeat center / cover;
}
header .headerWrap {
  background-color: rgba(0, 0, 0, .3);
  height: 343px;
}
#main-header {
  position: relative;
  width: 100%;
  z-index: auto;
  display: block;
}

.nav-container {
  display: flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  width: 100%;
  height: 72px;
  max-width: 1060px;
}

.logo-container {
  box-sizing: border-box;
  letter-spacing: 0px;
  overflow-anchor: none;
}

.button-logo {
  margin: 0px;
  padding: 0px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

.search-container {
  position: relative;
  width: 340px;
  height: 48px;
  margin-left: 24px;
}

.search-container-input {
  position: relative;
  margin-right: 14px;
}

.search-container-input2 {
  position: relative;
  overflow: hidden;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 48px;
  border: none;
  border-radius: 4px;
  background-color:rgba(256, 256, 256, .2)
}

.search-container-input-img {
  position: absolute;
  left: 18px;
  display: flex;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
  flex: 10px 10px 48px;
  justify-content: center;
}

.search-container-input-img-value {
  display: inline-block;
  border: 0px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.search-input {
  appearance: none;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  padding: 0px 16px 0px 48px;
  outline: 0px;
  margin: 0;
  line-height: inherit;
  border-radius: 0;
  box-sizing: border-box;
  overflow-anchor: none;
}
.search-input::placeholder {
  color: #fff;
}
.header-big-container {
  display: flex;
  flex-grow: 1;
  height: 100%;
  -webkit-box-align: center;
  align-items: center;
  justify-content: flex-end;
}

.header-small-container {
  display: flex;
  height: 36px;
  position: relative;
  margin-right: 0px;
}

.login-container {
  position: relative;
}

.login-button {
  margin: 0px;
  appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 8px 12px;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  color: #fff;
  text-decoration: none;
}

.join-button {
  margin: 0px 0px 0px 12px;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  height: 100%;
  padding: 0px 32px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  border: 1px solid #fff;
}

.bottom-header-container {
  width: 100%;
  border-bottom: 1px solid rgb(222, 226, 230);
}

.bottom-header-container-inner {
  display: flex;

  width: 100%;
  height: 50px;
  line-height: 50px;
  max-width: 1060px;
  margin: 0px auto;
}

.mainpage-container {
  display: flex;
}

.item-container {
  position: relative;
  display: flex;
  margin: 0px 14px;
}

.href {
  text-decoration: none;
  cursor: pointer;
}

.item-container-title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.item-container1 {
  position: relative;
}
.item-container1 button {
  height: 48px;
}
.item-container1 ul {
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 0;
  transition: opacity 1s;
}
.item-container1 ul a {
  padding: 15px;
  color: #343A40;
  font-weight: 500;
}
.item-container1-container {
  margin: 0px 0px 0px 14px;
  padding: 0px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 96px;
  color: var(--gray-700);
}

.item-container1-title {
  margin-right: 2px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: #fff;
}
.moreImg {
  display: inline-block;
  border: 0px;
  width: 23px;
  height: 23px;
}

.headerBg {
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}
.headerBg img {
  width: 16px;  
  height: 16px;
}
.headerBg ul {
  margin-left: 2px;
}
.headerBg h1 {
  font-size: 54px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-top: 72px;
}
/* 메인 */
main {
    border-radius: 12px;
    background-color: #fff;
}
section.topMenu {
  width: 100%;
  border-bottom: 1px solid rgb(222, 226, 230);
}
.topMenuWrap {
    width: 394px;
    margin: 0 auto;
    height: 107px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px -1px 0px 0px #DEE2E6 inset;
    padding: 12px 16px;
}
section.topMenu a {
    width: 134px;
    height: 95px;
    text-align: center;
    align-items: center;
    color: #495056;
}
section.topMenu img {
    width: 48px;
    height: 48px;
    
}
/* section.bottomMenu */
section.bottomMenu {
  padding-top: 49px;
}
section.bottomMenu h1 {
  margin-bottom: 16px;
}
section.bottomMenu ul {
  width: 1060px;
  flex-wrap: wrap;
  justify-content: space-between;
}
section.bottomMenu li {
  width: 259px;
  height: 48px;
  padding: 11px 0 11px 12px;
  background: #F5F6F7;
  margin-bottom: 8px;
  border-radius: 4px;
}
section.bottomMenu li:hover {
  background-color: #e9ecef;
}
section.bottomMenu li a {
  align-items: center;
}
section.bottomMenu img {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}
section.bottomMenu p {
  color: #343A40;
  font-size: 16px;
}
/* sec.교통 */
.traffic .img1 {
  background: url('/JapenTravel/images/traffic1.jpeg') no-repeat center / cover;
}
.traffic .img2 {
  background: url('/JapenTravel/images/traffic2.jpeg') no-repeat center / cover;
}
.traffic .img3 {
  background: url('/JapenTravel/images/traffic3.jpeg') no-repeat center / cover;
}
.traffic .img4 {
  background: url('/JapenTravel/images/traffic4.jpeg') no-repeat center / cover;
}
.traffic .img5 {
  background: url('/JapenTravel/images/traffic5.jpeg') no-repeat center / cover;
}
.traffic .img6 {
  background: url('/JapenTravel/images/traffic6.jpeg') no-repeat center / cover;
}
.traffic .img7 {
  background: url('/JapenTravel/images/traffic7.jpeg') no-repeat center / cover;
}
.traffic .img8 {
  background: url('/JapenTravel/images/traffic8.jpeg') no-repeat center / cover;
}
.traffic .img9 {
  background: url('/JapenTravel/images/traffic9.jpeg') no-repeat center / cover;
}
.traffic .img10 {
  background: url('/JapenTravel/images/traffic10.jpeg') no-repeat center / cover;
}
.traffic .img11 {
  background: url('/JapenTravel/images/traffic11.jpeg') no-repeat center / cover;
}
.traffic .img12 {
  background: url('/JapenTravel/images/traffic12.jpeg') no-repeat center / cover;
}

/* 슬라이드 공통 */
section.traffic,
section.ticket {
  padding-top: 56px;
  position: relative;
  overflow: hidden;
}
section.ticket {
  margin-bottom: 56px;
}
.trafficCons,
.ticketCons {
  padding: 2px 1px 8px ;
}
.trafficCons li,
.ticketCons li {
  width: 250px;
  height: 311px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .16);
  position: relative;
}
.trafficCons li::after,
.ticketCons li::after {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('/JapenTravel/images/하트.pngㄴ') no-repeat center / cover;
  color: #fff;
  position: absolute;
  top: 8px;
  right: 8px;
}
.traffic div[class^=img],
.ticket div[class^=img] {
  width: 250px;
  height: 166px;
}
.trafficText,
.ticketText {
  width: 100%;
  height: 145px;
  padding: 10px 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.trafficText span,
.ticketText span {
  color: #848c94;
  font-size: 12px;
}
.trafficText h3,
.ticketText h3 {
  font-size: 15px;
  color: #343a40;
  font-weight: 600;
}
.trafficText img,
.ticketText img {
  margin-right: 4px;
  width: 60px;
}
.trafficText div:first-child,
.ticketText div:first-child {
  height: 12px;
  align-items: center;
  margin-bottom: 8px;
}
.trafficText div:first-child span,
.ticketText div:first-child span {
  color: #848c94;
  font-size: 12px;
}
.trafficText .row,
.ticketText .row {
  align-items: center;
}
p.price {
  color: #666d75;
  font-weight: 14;
  font-weight: 500;
}
.trafficText .row p:last-child,
.ticketText .row p:last-child {
  color: #666d75;
  font-size: 12px;
  margin-left: 2px;
}
.trafficCons,
.ticketCons {
  position: relative;
}
.slideNavigation {
  border: 1px solid red;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}
.slideNavigation img {
  width: 25px;
  margin-top: 4px;
}
.slideNavigation button {
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  position: absolute;
  z-index: 99;
}
.SlidePrev img,
.SlideNext img {
  width: 25px;
}
.SlidePrev {
  left: -20px;
}
.SlideNext {
  right: -20px;
}

/* sec 티켓 */
.ticket {
  margin-top: 40px;
}
.ticket .img1 {
  background: url('/JapenTravel/images/ticket1.jpeg') no-repeat center / cover;
}
.ticket .img2 {
  background: url('/JapenTravel/images/ticket2.jpeg') no-repeat center / cover;
}
.ticket .img3 {
  background: url('/JapenTravel/images/ticket3.jpeg') no-repeat center / cover;
}
.ticket .img4 {
  background: url('/JapenTravel/images/ticket4.jpeg') no-repeat center / cover;
}
.ticket .img5 {
  background: url('/JapenTravel/images/ticket5.jpeg') no-repeat center / cover;
}
.ticket .img6 {
  background: url('/JapenTravel/images/ticket6.jpeg') no-repeat center / cover;
}
.ticket .img7 {
  background: url('/JapenTravel/images/ticket7.jpeg') no-repeat center / cover;
}
.ticket .img8 {
  background: url('/JapenTravel/images/ticket8.jpeg') no-repeat center / cover;
}
.ticket .img9 {
  background: url('/JapenTravel/images/ticket9.jpeg') no-repeat center / cover;
}
.ticket .img10 {
  background: url('/JapenTravel/images/ticket10.jpeg') no-repeat center / cover;
}
.ticket .img11 {
  background: url('/JapenTravel/images/ticket11.jpeg') no-repeat center / cover;
}
.ticket .img12 {
  background: url('/JapenTravel/images/ticket12.jpeg') no-repeat center / cover;
}
/* 푸터 */
.bot {
  font-family: 'SF Pro KR', 'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont,
    'Noto Sans KR', 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  letter-spacing: 0px;
  -webkit-font-smoothing: antialiased;
  overflow-anchor: none;
  color: #343a40;
  line-height: 1.5;
}

.foot {
  position: relative;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgb(233, 236, 239);
}

.infoot{
    max-width: 1060px;
    margin: 0px auto;
    padding: 40px 0px;
}

.topfoot {
  display: flex;
  padding-bottom: 32px;
}

.topfoot-in {
  width: 100%;
}

.teaminfo {
  font-size: 18px;
  font-weight: bold;
  color: rgb(102, 109, 117);
}

ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
  outline: none;
  color: #343a40;
}

.info-plan {
  font-size: 14px;
  letter-spacing: -0.2px;
  line-height: 1.5;
  word-break: break-all;
  white-space: pre-wrap;
  outline: none;
  display: list-item;
  text-align: justify;
  color: #343a40;
}