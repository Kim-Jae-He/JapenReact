import FooterPage from '../components/footer';
import HeaderPages from '../components/header';
import MainPage from './main';

const IndexPage = () => {
  return (
    <>
      <HeaderPages></HeaderPages>
      <MainPage></MainPage>
      <FooterPage></FooterPage>
    </>
  );
};

export default IndexPage;
