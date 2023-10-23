import {
  MainNotice,
  MainNoticeTitle,
  MoreView,
  Moreicon,
  NoticeBoard,
  NoticeCon,
  Rowlength,
} from '../styles/notice.styles';

const NoticePage = () => {

    








  return (
    <>
      <NoticeBoard>
        <MainNotice>
          <MainNoticeTitle>공지사항</MainNoticeTitle>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Moreicon>더보기</Moreicon>
          </div>
          <MoreView>
            <div className="notice-mini">
              <NoticeCon style={{ tableLayout: 'auto' }}>
                <colgroup>
                  <col style={{ width: '72px' }} />
                  <col style={{ width: '960px' }} />
                  <col style={{ width: '120px' }} />
                </colgroup>
                <thead style={{ display: 'none' }}>
                  <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">등록일</th>
                  </tr>
                </thead>
                <Rowlength>
                  <tr style={{ width: '1060' }}>
                    <td>1</td>
                    <td-table>
                      <a>[공지] 홈페이지에 오신걸 환영합니다.</a>
                    </td-table>
                    <td>2023-09-28</td>
                  </tr>
                  <tr style={{ width: '1060' }}>
                    <td>1</td>
                    <td-table>
                      <a>[이벤트] 이벤트를 확인해보세요.</a>
                    </td-table>
                    <td>2023-09-28</td>
                  </tr>
                  <tr style={{ width: '1060' }}>
                    <td>1</td>
                    <td-table>
                      <a>[업데이트] 업데이트 내역을 확인해보세요.</a>
                    </td-table>
                    <td>2023-09-28</td>
                  </tr>
                </Rowlength>
              </NoticeCon>
            </div>
          </MoreView>
        </MainNotice>
      </NoticeBoard>
    </>
  );
};

export default NoticePage;
