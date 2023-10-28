*,
::before,
::after {
  font-family: 'SF Pro KR', 'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont,
    'Noto Sans KR', 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

main {
  display: block;
  position: relative;
}

a {
  text-decoration: none;
  outline: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  touch-action: manipulation;
  background-color: transparent;
}

.traveler {
  background-color: #fff;
  font-size: 0;
}

.profile-container {
  margin: 0 auto;
  padding: 50px 0 102px;
  position: relative;
  width: 1060px;
}

.headline {
  color: #495056;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 17px;
}

.leftbar {
  color: #343a40;
  display: inline-block;
  float: left;
  margin-right: 18px;
  width: 250px;
}

.rightbar {
  display: inline-block;
  width: 790px;
}

.left-con {
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px #dee2e6;
  margin-bottom: 8px;
  height: 250px;
  padding: 42px 10px 30px;
  text-align: center;
}

.pro-img {
  border: 2px solid #e9ecef;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
}

.username {
  font-size: 18px;
  font-weight: 600;
  margin: 11px 0 23px;
}
.text-ms {
  font-size: 14px;
  font-weight: 500;
}

.left-icon {
  margin-bottom: 2px;
  margin-right: 2px;
  display: inline-block;
  border-width: 0;
  vertical-align: middle;
  border: 0;
}

.left-procon {
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px #dee2e6;
  margin-bottom: 8px;
  padding: 13px 20px;
}

.procon-item {
  display: block;
  font-weight: 500;
  margin: 7px 0;
}

.heart {
  font-size: 11px;
  display: inline-block;
  text-align: left;
  width: 40%;
}

.heart-count {
  font-size: 14px;
  color: #2b96ed;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0;
  text-align: right;
  width: 60%;
}

.love {
  vertical-align: text-bottom;
}

.memberbox {
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px #dee2e6;
  margin-bottom: 8px;
  color: #495056;
  font-weight: 500;
  position: relative;
}

.mycontent {
  padding-bottom: 20px;
  font-size: 14px;
  padding: 50px 40px 40px;
  position: relative;
}

.proimg {
  margin-bottom: 50px;
  position: relative;
  text-align: center;
}

.proimg-img {
  border-radius: 49px;
}

.right-top-form {
  display: inline-block;
}

.text {
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
}

.membercon {
  margin-bottom: 10px;
}

.form-group {
  min-height: 45px;
  margin-bottom: 10px;
  line-height: 27px;
  position: relative;
}

.title {
  line-height: 45px;
  font-weight: 600;
  position: absolute;
  width: 122px;
}

.input-con {
  line-height: 45px;
  width: 100%;
  display: inline-block;
  padding-left: 122px;
}

.input-wrap {
  background-color: #fff;
  font-weight: 500;
  height: 40px;
  margin-top: 0;
  padding: 0 20px;
  border: solid 1px #ced4da;
  border-radius: 4px;
  font-size: 14px;
  color: #343a40;
  box-shadow: none;
  display: block;
  width: 100%;
  line-height: 1.5;
  background-image: none;
}

.right-form-btn {
  border-top: 1px solid #dee2e6;
  display: block;
  padding-top: 24px;
  margin-top: 24px;
  text-align: center;
}

.right-form-btn-con {
  margin: 0 -4px;
  overflow: visible;
  padding-bottom: 20px;
}

.form-btn {
  display: inline-block;
  float: left;
  padding: 0 4px;
  width: 50%;
}

.btn-exit {
  background-color: #e9ecef;
  color: #495056 !important;
  width: 100%;
  font-size: 14px;
  height: 40px;
  line-height: 38px;
  transition: all 0.1s ease-out;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  display: block;
  font-weight: 700;
  padding: 0;
  text-align: center;
}

.btn-check {
  background-color: #51abf3;
  color: #fff !important;
  width: 100%;
  font-size: 14px;
  height: 40px;
  line-height: 38px;
  transition: all 0.1s ease-out;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  display: block;
  font-weight: 700;
  padding: 0;
  text-align: center;
}

.remove-con {
  margin-top: 25px;
  text-align: center;
}

.remove-text {
  font-size: 12px;
  color: #848c94;
  cursor: pointer;
  display: inline-block;
  text-decoration: underline;
}

.delete-con {
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  transition: all 0.3s ease 0s;
  width: 500px;
  border-radius: 4px;
  background-color: white;
  z-index: var(--z-dialog);
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -50%);
}
