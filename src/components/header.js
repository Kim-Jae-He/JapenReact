import React from 'react';

const Header = () => {
  return (
    <header id="main-header">
      <nav className="nav-container">
        <div className="logo-container">
          <button type="button" className="button-logo">
            <img className="img-logo" src="../images/logo.svg" alt="myrealtrip" />
          </button>
        </div>
        <div className="search-container">
          <div className="search-container-input">
            <div className="search-container-input2">
              <div className="search-container-input-img">
                <img
                  className="search-container-input-img-value"
                  src="../images/read.png"
                  alt="icon"
                />
              </div>
              <input
                type="text"
                className="search-input"
                autoComplete="off"
                placeholder="도시를 검색해보세요"
              />
            </div>
          </div>
        </div>
        <div className="header-big-container">
          <div className="header-small-container">
            <div className="login-container">
              <button type="button" className="login-button">
                로그인
              </button>
            </div>
            <div className="login-join-container">
              <button type="button" className="join-button">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="bottom-header-container">
        <nav className="bottom-header-container-inner">
          <div className="mainpage-container">
            <div className="item-container">
              <a href="/" className="href">
                <span className="item-container-title">항공권</span>
              </a>
            </div>
            <div className="item-container">
              <a href="/" className="href">
                <span className="item-container-title">해외숙소</span>
              </a>
            </div>
            <div className="item-container">
              <a href="/" className="href">
                <span className="item-container-title">국내숙소</span>
              </a>
            </div>
            <div className="item-container">
              <a href="/" className="href">
                <span className="item-container-title">투어·티켓</span>
              </a>
            </div>
            <div className="item-container">
              <a href="/" className="href">
                <span className="item-container-title">패키지</span>
              </a>
            </div>
            <div className="item-container">
              <a href="/" className="href">
                <span className="item-container-title">여행자보험</span>
              </a>
            </div>
            <div className="item-container">
              <a href="/" className="href">
                <span className="item-container-title">키즈</span>
              </a>
            </div>
            <div className="item-container">
              <a href="/" className="href">
                <span className="item-container-title">국내 렌터카</span>
              </a>
            </div>
            <div className="item-container">
              <a href="/" className="href">
                <span className="item-container-title">유심·이심</span>
              </a>
            </div>
            <div className="item-container1">
              <button type="button" className="item-container1-container">
                <span className="item-container1-title">더보기</span>
                <img src="../images/more.png" className="moreimg" alt="더보기" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};




export default Header;
