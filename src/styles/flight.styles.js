@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@1,100&display=swap');
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
.body {
  background-color: white;
  font-family: 'Work Sans', sans-serif;
  color: #343A40;
}

.main-header {
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

.img-logo {
  display: inline-block;
  border: 0px;
  width: 128px;
  vertical-align: middle;
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
  background: rgb(245, 246, 247);
  border: none;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  padding: 0px 16px 0px 48px;
  color: rgb(73, 80, 86);
  outline: 0px;
  margin: 0;
  line-height: inherit;
  border-radius: 0;
  box-sizing: border-box;
  overflow-anchor: none;
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

.login-join-container {
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
  color: rgb(102, 109, 117);
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
  color: rgb(43, 150, 237);
  border: 1px solid rgb(167, 212, 249);
  white-space: nowrap;
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
  color: rgb(73, 80, 86);
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
}

.moreImg {
  display: inline-block;
  border: 0px;
  width: 20px;
  height: 20px;
}
/* sec.select */
/* selectTop */
.selectTop {
    height: 38px;
    line-height: 38px;
    justify-content: space-between;
    margin: 42px 0 28px;
}
.selectTop button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 20px;
}
.selectTop button.roundTrip {
    padding: 10px 12px;
    font-size: 15px;
    background-color: #141719;
    color: #fff;
    margin-right: 8px;
}
.selectTop a {
    color: #141719;
    font-size: 16px;
    padding: 10px 12px;
}
.reservation button {
    padding: 10px 14px;
    color: #141719;
    font-weight: 600;
    font-size: 15px;
    background-color: #f1f3f5;
}
.reservation button:first-child {
    margin-right: 6px;
}
.reservation img {
  width: 15px;
}
/* selectMiddle */
.selectMiddle .city {
    width: 460px;
    height: 46px;
    padding: 1px;
    align-items: center;
    border: 1px solid #DEE2E6;
    border-radius: 16px;
    margin-bottom: 36px;
}
.city a:first-child,
.city a:last-child {
    color: #343a40;
    width: 199px;
    padding-left: 14px;
}
.city img {
    width: 32px;
    height: 32px;
}
.selectDate {
  width: 302px;
  height: 48px;
  padding-left: 44px;
  align-items: center;
  border: 1px solid #DEE2E6;
  border-radius: 16px;
  cursor: pointer;
}
.selectDate input {
  width: 106px;
  height: 46px;
  border: none;
  font-size: 15px;
  font-weight: 600;
}

/* selectBottom */
.selectBottom {
  position: relative;
  padding-bottom: 46px;
  border-bottom: 0.5px solid #CED4DA;;
}
.selectBottom div {
  color: #495056;
  font-size: 14px;
}
.selectBottom label span {
  margin-left: 8px;
}
.selectBottom label:first-child {
  margin-right: 14px;
}
.selectBottom div > span {
  margin-left: 16px;
  display: inline-block;
  width: 1px;
  height: 12px;
  background-color: rgb(102, 109, 117);
  opacity: .3;
}
.selectBottom p {
  margin: 0 3px 0 14px;
}
.selectBottom p img {
  width: 16px;
  margin-bottom: -4px;
}
button.flightSearch {
  background-color: #2B96ED;
  padding: 14px 24px;
  height: 56px;
  font-weight: bold;
  color: #fff;
  border-radius: 28px;
  font-weight: bold;
  font-size: 18px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: -50%;
  right: 0;
}
/* section.notice */
section.notice {
  padding: 24px 0;
  justify-content: space-between;
}
section.notice div {
  height: 22px;
  align-items: center;
}
section.notice label {
  background-color: #1583DB;
  width: 40px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  color: #fff;
  margin-right: 4px;
}
section.notice p.text {
  color: #343A40;
  font-size: 15px;
}
section.notice span {
  margin: 0 10px 0 8px;
  display: inline-block;
  width: 1px;
  height: 10px;
  background-color:  rgb(132, 140, 148);
}
section.notice div p:last-child {
  font-size: 13px;
  color:  rgb(132, 140, 148);
}
section.notice div:last-child p {
  font-weight: 600;
  font-size: 13px;
  line-height: 22px;
  color: #848C94;
}
section.notice div:last-child {
  cursor: pointer;
}
section.notice div:last-child img {
  width: 15px;
}
/* sec.event */
section.event {
  margin: 48px auto 85px;
}
.swiper-container {
  overflow: hidden;
  margin-top: 20px;
  position: relative;
}

section.event li a {
  display: block;
  width: 520px;
  height: 128px;
  border-radius: 24px;
  color: #fff; 
  margin-right: 20px;
}
section.event div.dark {
  padding: 20px 30px;
  width: 520px;
  height: 128px;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, .3);
}
section.event li:first-child a {
  background: url('/JapenTravel/images/airBusan.png') no-repeat center / cover;
}
section.event li:nth-child(2) a {
  background: url('/JapenTravel/images/busan.jpeg') no-repeat center / cover;
}
section.event li:nth-child(3) a {
  background: url('/JapenTravel/images/airastana.jpeg') no-repeat center / cover;
}
section.event li:last-child a {
  background: url('/JapenTravel/images/sanfrancisco.jpeg') no-repeat center / cover;
}
.myRealTrip {
  width: 55px;
}
.koreanAir {
  width: 85px;
}
.airAstana {
  width: 60px;
}
section.event p.title {
  font-size: 25px;
  font-weight: 600;
  margin: 7px 0;
}
section.event p.subTitle {
  font-weight: 500;
}
/* 슬라이드 */
.slideNavigation {
  border: 1px solid red;
  width: 1060px;
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
}
.slidePrev img,
.slideNext img {
  width: 25px;
}
.slidePrev {
  left: -20px;
}
.slideNext {
  right: -20px;
}
/* sec.search */
/* sec.jeju */
section.jeju {
  margin-top: 48px;
}
section.search h1,
section.jeju h1 {
  font-weight: 700;
  margin-bottom: 20px;
}
section.search ul,
section.jeju ul {
  width: 100%;
  justify-content: space-between;
}
section.search a,
section.jeju a {
  display: block;
  width: 250px;
  height: 279px;
  border-radius: 24px;
  border: 1px solid #e9ecef;
  overflow: hidden;
  color: #343A40;
}
.searchBottom,
.jejuBottom {
  padding: 12px 16px;
}
.searchBottom h4,
.jejuBottom h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}
.searchBottom p,
.jejuBottom p {
  font-size: 13px;
  font-weight: 600;
  color: #848c94;
}
.searchBottom span,
.jejuBottom span {
  display: inline-block;
  margin-top: 7px;
  font-size: 14px;
  font-weight: 600;
}
div[class^="searchImg"],
div[class^="jejuImg"] {
  height: 168px;
  overflow: hidden;
}
.searchImg1 {
  background: url('/JapenTravel/images/방콕.jpeg') no-repeat center / cover;
}
.searchImg2 {
  background: url('/JapenTravel/images/도쿄.jpeg') no-repeat center / cover;
}
.searchImg3 {
  background: url('/JapenTravel/images/다낭.jpeg') no-repeat center / cover;
}
.searchImg4 {
  background: url('/JapenTravel/images/대만.jpeg') no-repeat center / cover;
}
.jejuImg1 {
  background: url('/JapenTravel/images/제주1.jpeg') no-repeat center / cover;
}
.jejuImg2 {
  background: url('/JapenTravel/images/제주2.jpeg') no-repeat center / cover;
}
.jejuImg3 {
  background: url('/JapenTravel/images/제주3.jpeg') no-repeat center / cover;
}
.jejuImg4 {
  background: url('/JapenTravel/images/제주4.jpeg') no-repeat center / cover;
}
/* sec.flightNotice */
section.flightNotice {
  margin-top: 80px;
}
section.flightNotice p.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
}
section.flightNotice p.more {
  color: #848c94;
}
section.flightNotice > div.row {
  width: 100%;
  justify-content: space-between;
  height: 20px;
  align-items: center;
}
section.flightNotice > div.row img {
  width: 15px;
  height: 15px;
}
section.flightNotice ul {
  border-top: 1px solid #ced4da;
  margin-top: 10px;
}
section.flightNotice ul li {
  width: 100%;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #e9ecef;
  align-items: center;
}
section.flightNotice ul li a {
  color: #495056;
  font-size: 15px;
}
section.flightNotice ul li span {
  color:#848c94;
  font-size: 13px;
}

