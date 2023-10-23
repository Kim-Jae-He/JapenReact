import styled from '@emotion/styled';

export const NoticeBoard = styled.form`
  font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', '맑은 고딕', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  color: #343a40;
  letter-spacing: -0.2px;
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
  font: inherit;
  vertical-align: baseline;
  display: flex;
`;

export const MainNotice = styled.div`
  float: left;
  width: 1060px;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', '맑은 고딕', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  color: #343a40;
  letter-spacing: -0.2px;
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
`;

export const MainNoticeTitle = styled.h2`
  float: left;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  background: none;
  padding: 0;
  margin: 0;
  color: #393939;
  outline: 0;
  vertical-align: baseline;
`;

export const MoreView = styled.div`
  float: right;
  line-height: 20px;
`;

export const Moreicon = styled.a`
  text-align: right;
  cursor: pointer;
  padding-right: 16px;
  font-weight: 500;
  color: #848c94;
`;

export const MoticeImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

export const NoticeCon = styled.table`
  border-top: 1px solid #ced4da;
  width: 100%;
  border-top: #555 2px solid;
  font-size: 13px;
  table-layout: fixed;
  margin-top: 10px !important;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  font-family: '돋움', Dotum, '굴림', Gulim, AppleGothic, sans-serif;
  &:tr {
    font-weight: normal;
  }
  &:th {
    font-weight: normal;
  }
`;

export const Rowlength = styled.td`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  display: table-row-group;
  font-weight: normal;
`;

export const TdTable = styled.td`
  vertical-align: middle;
  width: 960px;
  padding: 16px 0 !important;
  font-size: 15px;
  color: #495056;
  line-height: 16px !important;
  border-right: none;
  border-color: #e9ecef;
`;

export const Col = styled.th`
  display: table-column;
`;
